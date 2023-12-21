import React, { Component } from 'react';
import axiosInstance from '../AxiosInstance.jsx';
import { Link } from 'react-router-dom';

class ViewAcademyManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      expandedCards: {},
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const token = window.localStorage.getItem('token');
      const response = await axiosInstance.get('/academymanagers/getall', {
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

  toggleCardExpansion = (cardId) => {
    this.setState((prevState) => ({
      expandedCards: {
        ...prevState.expandedCards,
        [cardId]: !prevState.expandedCards[cardId] || false,
      },
    }));
  };

  render() {
    const { data, expandedCards } = this.state;

    return (
      <div>
        <section id="viewAcademyMgr">
          <h1>
            TOTAL NUMBER OF ACADEMY MANAGER <span>{data.length}</span>
          </h1>
          <article className="card-container">
            {data.map((val) => (
              <div className={`card ${expandedCards[val.id] ? 'expanded' : ''}`} key={val.id}>
                <img
                  src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
                  className="card-img-top"
                  alt="Chicago Skyscrapers"
                />

                <div className="card-body">
                  <h5 className="card-title">Name - {val.userName}</h5>
                  {expandedCards[val.id] ? (
                    <>
                      <p>
                        <span>Age</span>-{val.age}
                      </p>
                      <p>
                        <span>Designation</span>-{val.role}
                      </p>
                      <p>
                        <span>DOB</span>-{val.dob}
                      </p>
                      <p>
                        <span>TEL</span>-{val.phone}
                      </p>
                      <p>
                        <span>EMAIL</span>-{val.email}
                      </p>
                      <p>
                        <span>GENDER</span>-{val.gender}
                      </p>
                    </>
                  ) : null}
                  <div className="card-body">
                    {expandedCards[val.id] ? (
                      <>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => this.toggleCardExpansion(val.id)}
                        >
                          Show Less
                        </button>
                        <Link to={`/adminDashboard/viewAcademyManager/viewAcademyEachManager/${val.id}`}>
                          <button type="button" className="btn btn-primary">
                            VIEW
                          </button>
                        </Link>
                      </>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.toggleCardExpansion(val.id)}
                      >
                        Show More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </article>
        </section>
      </div>
    );
  }
}

export default ViewAcademyManager;
