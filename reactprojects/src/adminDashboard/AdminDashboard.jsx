// import React, { Component } from 'react';

// class AdminDashboard extends Component {
//   state = {
//     displayedText: '',
//   };

//   handleClick = () => {
//     console.log('Admin Dashboard clicked');
//     this.setState({ displayedText: 'Text displayed' });
//     // You can perform any actions or update state here
//   };

//   render() {
//     const { displayedText } = this.state;

//     return (
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-2">
//             <nav
//               id="sidebarMenu"
//               className="collapse d-lg-block sidebar collapse bg-white"
//             >
//               <div className="position-sticky admin-sidebar">
//                 <div className="list-group list-group-flush mx-3 mt-4">
//                   <a
//                     href="#"
//                     className="list-group-item list-group-item-action py-2 ripple"
//                     aria-current="true"
//                     onClick={this.handleClick}
//                   >
//                     <span>ADMIN DASHBOARD</span>
//                   </a>
//                   <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
//                     {/* <i className="fas fa-chart-area fa-fw me-3"></i> */}
//                     <span>Add Academy Manager</span>
//                   </a>
//                   <a href="#" className="list-group-item list-group-item-action py-2 ripple">
//                     {/* <i className="fas fa-lock fa-fw me-3"></i> */}
//                     <span>View Academy Manager</span>
//                   </a>
//                   <a href="#" className="list-group-item list-group-item-action py-2 ripple">
//                     {/* <i className="fas fa-chart-line fa-fw me-3"></i> */}
//                     <span>View Academy</span>
//                   </a>
//                   <a href="#" className="list-group-item list-group-item-action py-2 ripple">
//                     {/* <i className="fas fa-chart-pie fa-fw me-3"></i> */}
//                     <span>View Branch</span>
//                   </a>
//                   <a href="#" className="list-group-item list-group-item-action py-2 ripple">
//                     {/* <i className="fas fa-chart-bar fa-fw me-3"></i> */}
//                     <span>View Course</span>
//                   </a>
//                   <a href="#" className="list-group-item list-group-item-action py-2 ripple">
//                     {/* <i className="fas fa-globe fa-fw me-3"></i> */}
//                     <span>HOME</span>
//                   </a>
//                 </div>
//               </div>
//             </nav>
//           </div>
        
//           <div className="col admin-second-comp">
//             <div>{displayedText}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminDashboard;

// import React, { Component } from 'react';
// import AdminRegister from '../admin/AdminRegister'

// class AdminDashboard extends Component {
//   state = {
//     displayComponent: false,
//   };

//   handleClick = () => {
//     console.log('Admin Dashboard clicked');
//     this.setState({ displayComponent: true });
//     // You can perform any actions or update state here
//   };

//   render() {
//     const { displayComponent } = this.state;

//     return (
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-2">
//             <nav
//               id="sidebarMenu"
//               className="collapse d-lg-block sidebar collapse bg-white"
//             >
//               <div className="position-sticky admin-sidebar">
//                 <div className="list-group list-group-flush mx-3 mt-4">
//                   <a
//                     href="#"
//                     className="list-group-item list-group-item-action py-2 ripple"
//                     aria-current="true"
//                     onClick={this.handleClick}
//                   >
//                     <span>ADMIN DASHBOARD</span>
//                   </a>
//                   {/* Rest of the links */}
//                 </div>
//               </div>
//             </nav>
//           </div>
        
//           <div className="col admin-second-comp">
//             {displayComponent && <AdminRegister/>}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminDashboard;
import React, { Component } from 'react';
import AdminSideBar from './AdminSideBar';
import AdminMainBar from './AdminMainBar';

class AdminDashboard extends Component {
  render() {
    return (
      <div>
       
        {/* <section style={{ backgroundColor: 'lightgrey' }}> */}
        <section>
          <article style={{ display: "flex", gap: "100px" }}>
            <AdminSideBar />
             <AdminMainBar /> 
          </article>
        </section>
      </div>
    );
  }
}

export default AdminDashboard;


