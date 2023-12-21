import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import axiosInstance from '../AxiosInstance.jsx';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here
    const { userEmail, password } = this.state;
    console.log(this.state);
    try {
      const payload = {
        userEmail,
        password
      };
      const { data } = await axiosInstance.post("/authenticate", payload);
      const { token, role } = data;
      console.log(token, role);
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        if (role === "ROLE_ADMIN") {
          alert("LOGGED IN AS ADMIN");
          window.location.href = '/';
        } else {
          alert("LOGGED IN AS USER");
          window.location.href = '/';
        }
      } else {
        localStorage.removeItem("token", token);
        localStorage.removeItem("role", role);
      }

    } catch (error) {
      console.log("Unable to connect to the server");
    }
  };

  render() {
    const { userEmail, password } = this.state;

    return (
      <div>
        <NavBar />
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="col-lg-4">
            <h1 className="mt-4">Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="userEmail"
                  value={userEmail}
                  onChange={this.handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="btn btn-primary logInSubmitBtn">Login</button>
            </form>
            <div className="mt-3 d-flex justify-content-between">
              <Link to="/forgot-password">Forgot password?</Link>
              <span>Don't have an account? <Link to="/signup">Sign up</Link></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
