import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.logoutHandler = this.logoutHandler.bind(this);
    }

    logoutHandler() {
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        //instead of these two methods you can clear() can be used
        alert("Are you sure you want to logout?");
        window.location.href = '/login';
    }

    render() {
        const role = localStorage.getItem("role");
        const token = localStorage.getItem("token");

        return (
            <div id="menu">
               
            <ul className="navbar-nav flex-row d-none d-md-flex">

              <li className="nav-item nav-text nav-link me-3 me-lg-1 active"> Home</li>
              <Link to="/course"><li className="nav-item nav-text nav-link me-3 me-lg-1">Courses</li></Link>
              <li className="nav-item nav-text nav-link me-3 me-lg-1">Enroll</li>
              {role === "ROLE_ADMIN" ? 
                <Link to="/adminDashBoard">
              <li className="nav-item nav-text  nav-link me-3 me-lg-1">Admin Dashboard</li> 
              </Link> : null}

            </ul>
            {token ? <Link to = "/login"><ul className="navbar-nav flex-row"><li className="nav-item  nav-link me-3 me-lg-1" onClick={this.logoutHandler}> <button type="submit" className="btn btn-secondary loginIcon">Logout</button></li></ul> </Link> :
            <>
            <ul className="navbar-nav flex-row">
              <li className="nav-item  nav-link me-3 me-lg-1">
              <Link to="/login" className="btn btn-secondary loginIcon" href="#!" role="button">
                  <i className="fas fa-user me-2"></i>Log in
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav flex-row">
              <li className="nav-item  nav-link me-3 me-lg-1">
              <Link to="/signup" className="btn btn-secondary signupIcon"> Sign up  </Link>
              </li>
            </ul>

            </>
    }
            </div>
        );
    }
}

export default Menu;
