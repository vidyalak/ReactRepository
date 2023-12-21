import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AdminSideBar extends Component {
  render() {
    return (
      <div>
        <h2>ADMIN DASHBOARD</h2>
        <ul>
          <div className="container-fluid position-sticky">
            <li className="list-group-item list-group-item-action py-2 ripple">
              <Link to="/adminDashboard/addAcademyManager">Add Academy Manager</Link>
            </li>
            <li className="list-group-item">
              <Link to="/adminDashboard/viewAcademyManager">View Academy Manager</Link>
            </li>
            <li className="list-group-item">
              <Link to="/adminDashboard/viewAcademy">View Academy</Link>
            </li>
            <li className="list-group-item">
              <Link to="/adminDashboard/viewBranch">View Branch</Link>
            </li>
            <li className="list-group-item">
              <Link to="/adminDashboard/viewCourse">View Course</Link>
            </li>
            <li className="list-group-item">
              <Link to="/">HOME</Link>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default AdminSideBar;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class AdminSideBar extends Component {
//   render() {
//     return (
//       <div>
//         <h2>ADMIN DASHBOARD</h2>
//         <ul>
//           <div className="container-fluid position-sticky ">
//           <li className="list-group-item list-group-item-action py-2 ripple"><Link to="/adminDashboard/addAcademyManager">Add Academy Manager</Link></li>
//           <li className="list-group-item" ><Link to="/adminDashboard/viewAcademyManager">View Academy Manager</Link></li>
//           <li className="list-group-item"><Link to="/adminDashboard/viewAcademy">View Academy</Link></li>
//           <li className="list-group-item"><Link to="/adminDashboard/viewBranch">View Branch</Link></li>
//           <li className="list-group-item"><Link to="/adminDashboard/viewCourse">View Course</Link></li>
//           <li className="list-group-item"><Link to="/">HOME</Link></li>
//           </div>
          
//         </ul>
//       </div>


//     );
//   }
// }

// export default AdminSideBar;
