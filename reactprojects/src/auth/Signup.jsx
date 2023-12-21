import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imageSrc from '../img/signup.png';
import '../global.css';
import NavBar from './NavBar';
import axiosInstance from '../AxiosInstance';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      phone: '',
      gender: '',
      dob: '',
      submitted: false
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
        dob
      };
      const response = await axiosInstance.post("/users/save", payload);

      alert(`Successfully registered with email ${this.state.email} as a user`);

      this.setState({ submitted: true });
    } catch (error) {
      console.log("Unable to connect to server");
    }
  };

  redirectToLogin = () => {
    window.location.href = '/login';
  };

  render() {
    const { userName, email, password, phone, gender, dob, submitted } = this.state;

    if (submitted) {
      this.redirectToLogin();
      return null; // Render nothing after redirecting
    }

    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mt-4">Sign Up</h1>
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
                <div className='signUpSubmitBtn'>
                  <button type="submit" className="btn btn-primary signUpSubmitBtn1">Submit</button>
                </div>
              </form>
              {!submitted && (
                <p className="mt-3">
                  Already have an account? <Link to="/login">Sign in</Link>
                </p>
              )}
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

export default Signup;
