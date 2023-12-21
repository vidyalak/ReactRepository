// import React, { Component } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import imageSrc from '../img/signup.png';
// import '../global.css';
// import axiosInstance from '../AxiosInstance';

// class AddAcademyName extends Component {
//   constructor(props) {
//     super(props);
//     const { id } = useParams();
//     this.state = {
//       academyName: '',
//       contact: '',
//       description: '',
//       email: '',
//       submitted: false
//     };
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const { academyName, contact, description, email } = this.state;
//     try {
//       const payload = {
//         academyName,
//         contact,
//         description,
//         email
//       };
//       const token = window.localStorage.getItem('token');
//       console.log('token' + token);
//       const response = await axiosInstance.post('/academies/saveacademy?managerId=${id}', payload, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       console.log(response.data);
//       alert(`${email} Added Academy Successfully`);

//       this.setState({ submitted: true });
//     } catch (error) {
//       console.log('Unable to connect to server');
//     }
//   };

//   redirectToLogin = () => {
//     window.location.href = '/';
//   };

//   render() {
//     const { academyName, contact, description, email, submitted } = this.state;

//     if (submitted) {
//       this.redirectToLogin();
//       return null; // Render nothing after redirecting
//     }

//     return (
//       <div className="add-academy-container">
//         <div className="add-academy-form">
//           <h1 className="add-academy-title">Add Academy</h1>
//           <form onSubmit={this.handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="academyName">Academy Name:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="academyName"
//                 name="academyName"
//                 value={academyName}
//                 onChange={this.handleChange}
//                 placeholder="Enter your academy name"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="description">Description:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="description"
//                 name="description"
//                 value={description}
//                 onChange={this.handleChange}
//                 placeholder="Enter description"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={this.handleChange}
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="contact">Contact:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="contact"
//                 name="contact"
//                 value={contact}
//                 onChange={this.handleChange}
//                 placeholder="Enter contact"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary submit-button">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default AddAcademyName;

import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import imageSrc from '../img/signup.png';
import '../global.css';
import axiosInstance from '../AxiosInstance';


const AddAcademyName = () => {
  const { id } = useParams();
  const [academyName, setAcademyName] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'academyName') {
      setAcademyName(value);
    } else if (name === 'contact') {
      setContact(value);
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        academyName,
        contact,
        description,
        email,
        id
      };
      const token = window.localStorage.getItem('token');
      console.log('token' + token);
      const response = await axiosInstance.post(`/academies/saveacademy?managerId=${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(response.data);
      alert(`${email} Added Academy Successfully`);

      setSubmitted(true);
    } catch (error) {
      console.log('Unable to connect to server');
    }
  };

  const redirectToLogin = () => {
    window.location.href = '/';
  };

  if (submitted) {
    redirectToLogin();
    return null; // Render nothing after redirecting
  }

  return (
    // <div className="add-academy-container">
      <div className="add-academy-form">
        <h1 className="add-academy-title">Add Academy</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="academyName">Academy Name:</label>
            <input
              type="text"
              className="form-control"
              id="academyName"
              name="academyName"
              value={academyName}
              onChange={handleChange}
              placeholder="Enter your academy name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              className="form-control"
              id="contact"
              name="contact"
              value={contact}
              onChange={handleChange}
              placeholder="Enter contact"
            />
          </div>
          <button type="submit" className="btn btn-primary submit-button">
            Submit
          </button>
        </form>
      </div>
    // </div>
  );
};

export default AddAcademyName;
