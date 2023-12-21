import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class ProtectedRouter extends Component {
    render() {
        const { children } = this.props;

        if (localStorage.getItem('token')) {
            return <div>{children}</div>;
          } else {
            alert('Please login to application to view Course Details');
            return <Navigate to="/login" />;
          }
        }
      }

export default ProtectedRouter;
