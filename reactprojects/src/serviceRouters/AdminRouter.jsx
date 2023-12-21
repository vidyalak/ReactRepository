import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
class AdminRouter extends Component {
    render() {
        const { children } = this.props;
        if (localStorage.getItem('role') === 'ROLE_ADMIN') {
            return <div>{children}</div>;
          } else {
            alert('Please login to application to view Course Details');
            return <Navigate to="/" />;
          }
        }
}

export default AdminRouter;
