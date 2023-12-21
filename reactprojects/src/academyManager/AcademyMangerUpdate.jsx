import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import imageSrc from '../img/adminSignup.jpg';
import '../global.css';
import axiosInstance from '../AxiosInstance';

const AcademyMangerUpdate = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    dob: ''
  });

  const navigate = useNavigate(); // Add useNavigate hook

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = window.localStorage.getItem('token');
      const response = await axiosInstance.get(`/academymanagers/get/${id}`, {
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
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = window.localStorage.getItem('token');
      const response = await axiosInstance.post('/academymanagers/save', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(response.data);
      alert(`${formData.email} Academy Manager Updated Successfully`);

      // Redirect to the login page
      navigate(`/adminDashboard/viewAcademyManager/viewAcademyEachManager/${id}`);
    } catch (error) {
      console.log('Unable to connect to server');
    }
  };

  const { userName, email, password, phone, gender, dob } = formData;

  return (
    <div className="academy-manager-update">
      <h4 className="mt-4">EDIT Academy Manager Register</h4>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div>Username:</div>
                <input
                  type="text"
                  className="form-control"
                  name="userName"
                  value={userName}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
              </div>
              <div className="form-group">
                <div>Email:</div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <div>Password:</div>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group">
                <div>Phone:</div>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <div>Gender:</div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={handleChange}
                  />
                  <div className="form-check-label">Male</div>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={handleChange}
                  />
                  <div className="form-check-label">Female</div>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                    value="other"
                    checked={gender === 'other'}
                    onChange={handleChange}
                  />
                  <div className="form-check-label">Other</div>
                </div>
              </div>
              <div className="form-group">
                <div>Date of Birth:</div>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={dob}
                  onChange={handleChange}
                />
              </div>
              <div className="signUpSubmitBtn">
                <button type="submit" className="btn btn-primary edit-academy-mgr-btn">
                  UPDATE
                </button>
              </div>
            </form>
            <p className="mt-3">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img src={imageSrc} alt="Signup" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyMangerUpdate;
