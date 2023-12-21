import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../global.css';
import axiosInstance from '../AxiosInstance';

const AddCourse = () => {
    const { id } = useParams();
    const [courseDurationInMonths, setCourseDurationInMonths] = useState('');
    const [fee, setFee] = useState('');
    const [type, setType] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'courseDurationInMonths') {
            setCourseDurationInMonths(value);
        } else if (name === 'fee') {
            setFee(value);
        } else if (name === 'type') {
            setType(value);
        } 
        
      };

    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const payload = {
            courseDurationInMonths,
            fee,
            type
          };
          const token = window.localStorage.getItem('token');
          console.log('token' + token);
          const response = await axiosInstance.post(`/dancecourses/save/?branchid=${id}`, payload, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
    
          console.log(response.data);
          alert(` Added Course Successfully`);
    
          setSubmitted(true);
        } catch (error) {
          console.log('Unable to connect to server');
        }
      };

      const redirectToLogin = () => {
        window.location.href = '/';
      };
    
      if (submitted) {
        redirectToLogin();
        return null; // Render nothing after redirecting
      }
    

  return (
    <div className="add-academy-container">
    <div className="add-academy-form">
      <h1 className="add-academy-title">Add Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="academyName">Duration :</label>
          <input
            type="text"
            className="form-control"
            id="courseDurationInMonths"
            name="courseDurationInMonths"
            value={courseDurationInMonths}
            onChange={handleChange}
            placeholder="Enter your branch address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Fee :</label>
          <input
            type="text"
            className="form-control"
            id="fee"
            name="fee"
            value={fee}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Type:</label>
          <input
            type="text"
            className="form-control"
            id="type"
            name="type"
            value={type}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
       
        <button type="submit" className="btn btn-primary submit-button">
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}


export default AddCourse