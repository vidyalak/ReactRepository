import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class AdminMainBar extends Component {
  render() {
    const { location } = this.props;
    const { pathname } = window.location;
    
    return (
      <div>
        {pathname === "/adminDashboard" ? (
          <h1 style={{ width: "80%", color: "blueviolet" }}>
            Welcome to Admin Dashboard
          </h1>
        ) : null}
       <Outlet/>
      </div>
    );
  }
}

export default AdminMainBar;
