import React, { useEffect, useState } from 'react';
import axiosInstance from '../AxiosInstance.jsx';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { faker } from '@faker-js/faker';

const ViewAcademyEachManager = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [img, setImg] = useState(faker.image.avatar());
  // const [deleted, setDeleted] = useState(false);

  const navigate = useNavigate(); // Add useNavigate hook

  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    try {
      const token = window.localStorage.getItem('token');
      const response = await axiosInstance.get(`/academymanagers/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const fetchedData = response.data.data;
      console.log('Fetched data:', fetchedData);
      setData(fetchedData);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = window.localStorage.getItem('token');
      await axiosInstance.delete(`/academymanagers/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // setDeleted(true);
      navigate('/adminDashboard/viewAcademyManager');
    } catch (error) {
      console.log('Error:', error);
    }
  };


  return (
    <div className="view-academy-each-manager">
      <h1>View Academy Each Manager</h1>
      <div className="card view-each-mgr-card">
        <div className="bg-image viewEachAcademyManagerImg hover-overlay ripple" data-mdb-ripple-color="light">
          <img src={img} className="card-img-top" alt="Profile" />
          <a href="#!">
            <div className="mask"></div>
          </a>
        </div>
        <div className="card-body">
          <div className="card-header">Name: {data.userName}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Role: {data.role}</li>
            <li className="list-group-item">Email: {data.email}</li>
            <li className="list-group-item">Gender: {data.gender}</li>
            <li className="list-group-item">Phone: {data.phone}</li>
            <li className="list-group-item">
              <Link to={`/adminDashboard/viewAcademyManager/updateAcademyManager/${id}`}>
                <button type="button" className="btn btn-primary">EDIT</button>
              </Link>
              <Link to={`/adminDashboard/viewAcademyManager/addAcademyName/${id}`}>
                <button type="button" className="btn btn-primary">ADD ACADEMY</button>
              </Link>
              <button type="button" className="btn btn-primary" onClick={handleDelete}>DELETE</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewAcademyEachManager;
