import React, { Component } from 'react'
import axiosInstance from '../AxiosInstance.jsx';
import { Link } from 'react-router-dom';
export default class viewCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }
    
      componentDidMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        try {
          const token = window.localStorage.getItem('token');
          const response = await axiosInstance.get('/dancecourses/getall', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const fetchedData = response.data.data;
          this.setState({ data: fetchedData });
        } catch (error) {
          alert('Error: ' + error);
        }
      };

      handleDelete = async (id) => {
        try {
          const token = window.localStorage.getItem('token');
          await axiosInstance.delete(`/dancecourses/delete/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.fetchData(); // Fetch data again after deleting to update the table
          alert('Academy deleted successfully');
        } catch (error) {
          alert('Error deleting academy: ' + error);
        }
      };

  render() {
    const { data } = this.state;
    return (
       <div>
            <h3>List Of Courses</h3>
            <table className="table align-middle mb-0 bg-white">
              <thead className="bg-light">
                <tr>
                  <th>SL No</th>
                   <th>Course Id</th>
                  <th>Course Name</th> 
                  <th>Course Duration Months</th>
                  <th>Course Fee</th> 
                  
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{index + 1}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{item.id}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{item.type}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{item.courseDurationInMonths}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{item.fee}</p>
                    </td>
                  
                   
                    <td>
                      <div className="d-flex">
                        <Link to={`/adminDashboard/viewCourse/updateCourse/${item.id}`}> 
                          <button type="button" className="btn viewAcademy btn-link btn-sm btn-rounded">
                            Edit
                          </button>
                       </Link> 
                   
                       
                        <button
                          type="button"
                          className="btn viewAcademy btn-link btn-sm btn-rounded"
                          onClick={() => this.handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

    )
  }
}
