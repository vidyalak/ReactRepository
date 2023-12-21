import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import imageSrc from '../img/adminSignup.jpg';
import '../global.css';
import axiosInstance from '../AxiosInstance';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AcademyManagerRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      phone: '',
      gender: '',
      dob: '',
      redirectToLogin: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, email, password, phone, gender, dob } = this.state;
    try {
      const payload = {
        userName,
        email,
        password,
        phone,
        gender,
        dob,
      };
      const token = window.localStorage.getItem('token');
      console.log('token' + token);
      const response = await axiosInstance.post('/academymanagers/save', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      toast.info(`${this.state.email} Academy Manager Registered Successfully`);

      this.setState({ redirectToLogin: true }); // Redirect to the login page
    } catch (error) {
      console.log('Unable to connect to server');
      this.setState({ redirectToLogin: false });
    }
  };

  render() {
    const { userName, email, password, phone, gender, dob, redirectToLogin } = this.state;
    if (redirectToLogin) {
      return <Navigate to="/adminDashboard" />;
    }
    return (
      <div>
        <div><ToastContainer /></div>
        <h1>Academy Manager Register</h1>
        <div className="container academy-mgr-register">
          <div className="row">
            <div className="col-lg-6">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div>Username:</div>
                  <input
                    type="text"
                    className="form-control"
                    name="userName"
                    value={userName}
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                      onChange={this.handleChange}
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
                      onChange={this.handleChange}
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
                      onChange={this.handleChange}
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
                    onChange={this.handleChange}
                  />
                </div>
                <div className="signUpSubmitBtn">
                  <button type="submit" onClick={()=>{toast.success(`Successfully Registered`,{position:toast.POSITION.TOP_RIGHT
                  })}} className="btn btn-primary academy-mgr-btn">
                    Submit
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
  }
}

export default AcademyManagerRegister;
