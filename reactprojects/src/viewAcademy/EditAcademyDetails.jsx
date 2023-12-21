import React, { useEffect, useState } from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';
import axiosInstance from '../AxiosInstance';

const EditAcademyDetails = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    academyName: '',
    email: '',
    contact: '',
    description: ''
  });

  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = window.localStorage.getItem('token');
      const response = await axiosInstance.get(`/academies/get/${id}`, {
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
      await axiosInstance.delete(`/academies/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert('Academy deleted successfully');

      // Redirect to the appropriate page
      // Replace `/redirect-url` with the actual URL you want to redirect to
      //  window.location.href = '/redirect-url';
         navigate(`/adminDashboard/viewAcademy`)
    } catch (error) {
      console.log('Unable to connect to the server');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = window.localStorage.getItem('token');
      await axiosInstance.put(`/academies/update`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert('Academy details updated successfully');

      // Redirect to the appropriate page
      // Replace `/redirect-url` with the actual URL you want to redirect to
        navigate(`/adminDashboard/viewAcademy`)
    } catch (error) {
      console.log('Unable to connect to the server');
    }
  };

  const { academyName, email, contact, description } = formData;

  return (
    <div>
      <h2>Edit Academy Details</h2>
      <div className='edit-academy-details'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Academy Name:</label>
          <input
            type="text"
            className="form-control"
            id="academyName"
            name="academyName"
            value={academyName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Contact:</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            name="contact"
            value={contact}
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
    </div>
  );
};

export default EditAcademyDetails;
