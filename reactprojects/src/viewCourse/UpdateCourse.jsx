import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import axiosInstance from '../AxiosInstance';

const UpdateCourse = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    courseDurationInMonths: '',
    fee: '',
    type: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const token = window.localStorage.getItem('token');
      const response = await axiosInstance.get(`/dancecourses/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const fetchedData = response.data.data;

      console.log('Fetched data:', fetchedData);
      setFormData(fetchedData);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = async () => {
    try {
      const token = window.localStorage.getItem('token');
      await axiosInstance.delete(`/dancecourses/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert('Course deleted successfully');

      // Redirect to the appropriate page
      navigate(`/adminDashboard/viewCourse`)
    } catch (error) {
      console.log('Unable to connect to the server');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = window.localStorage.getItem('token');
      await axiosInstance.put(`/dancecourses/update/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert('Course details updated successfully');

      // Redirect to the appropriate page
      navigate(`/adminDashboard/viewCourse`)
    } catch (error) {
      console.log('Unable to connect to the server');
    }
  };

  const { courseDurationInMonths, fee, type } = formData;

  return (
    <div>
      <h2>Edit Course Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="courseDurationInMonths">Duration:</label>
          <input
            type="text"
            className="form-control"
            id="courseDurationInMonths"
            name="courseDurationInMonths"
            value={courseDurationInMonths}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fee">Fee:</label>
          <input
            type="text"
            className="form-control"
            id="fee"
            name="fee"
            value={fee}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            className="form-control"
            id="type"
            name="type"
            value={type}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;
