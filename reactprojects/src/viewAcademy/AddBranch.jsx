import React, { useState } from 'react';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import imageSrc from '../img/signup.png';
import '../global.css';
import axiosInstance from '../AxiosInstance';


const AddBranch = () => {
  const { id } = useParams();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'address') {
        setAddress(value);
    } else if (name === 'city') {
        setCity(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'pincode') {
        setPincode(value);
    }
    
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {address,
        city,
        phone,
        pincode
      };
      const token = window.localStorage.getItem('token');
      console.log('token' + token);
      const response = await axiosInstance.post(`/branches/save/?aid=${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(response.data);
      alert(` Added Branch Successfully`);
      navigate(`/adminDashboard/viewAcademy`)
      setSubmitted(true);
    } catch (error) {
      console.log('Unable to connect to server');
    }
  };

  

  return (
    <div className="add-academy-container">
      <div className="add-academy-form">
        <h1 className="add-academy-title">Add Branch</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="academyName">ADDRESS :</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={address}
              onChange={handleChange}
              placeholder="Enter your branch address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">City :</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={city}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Contact:</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Pincode:</label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              name="pincode"
              value={pincode}
              onChange={handleChange}
              placeholder="Enter contact"
            />
          </div>
          <button type="submit" className="btn btn-primary submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBranch;
