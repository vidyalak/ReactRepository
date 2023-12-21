// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const PublicRouter = ({ children }) => {
//   if (localStorage.getItem('token')) {
//     return <Navigate to="/" />;
//   } else {
//     return <div>{children}</div>;
//   }
// };

// export default PublicRouter;

import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
class PublicRouter extends Component {
  render() {
    const { children } = this.props;

    if (localStorage.getItem('token')) {
      return <Navigate to="/" />;
    } else {
      return <div>{children}</div>;
    }
  }
}

export default PublicRouter;
