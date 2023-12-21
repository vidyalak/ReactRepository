import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom';
import axiosInstance from '../AxiosInstance'

const UpdateBranch = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    phone: '',
    pincode: ''
  });
  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const token = window.localStorage.getItem('token');
      const response = await axiosInstance.get(`/branches/get/${id}`, {
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
      await axiosInstance.delete(`/branches/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert('Academy deleted successfully');
      // window.location.href = '/redirect-url';
      navigate(`/adminDashboard/viewBranch`)
    } catch (error) {
      console.log('Unable to connect to the server');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = window.localStorage.getItem('token');
      await axiosInstance.put(`/branches/update/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert('Academy details updated successfully');

      navigate(`/adminDashboard/viewBranch`)
    } catch (error) {
      console.log('Unable to connect to the server');
    }
  };

  const { address, city, phone, pincode } = formData;

  return (
    <div>
    <h2 className='edit-branch-head'>Edit Branch Details</h2>
    <div className='edit-branch-body'>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Address :</label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          value={address}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">City :</label>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          value={city}
          onChange={handleChange}
        />
       
      </div>
      <div className="form-group">
        <label htmlFor="email">Contact :</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Pincode :</label>
        <input
          type="text"
          className="form-control"
          id="pincode"
          name="pincode"
          value={pincode}
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
  )
}

export default UpdateBranch