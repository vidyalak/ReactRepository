import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackGroundImage from './auth/BackGroundImage';
import Signup from './auth/Signup';
import Login from './auth/Login';
import AdminRegister from './admin/AdminRegister';
import AdminLogin from './admin/AdminLogin';
import './global.css';
import LandingPage from './auth/LandingPage';
import AdminDashboard from './adminDashboard/AdminDashboard';
import UserEnroll from './auth/UserEnroll';
import Course from './auth/Course';
import PublicRouter from './serviceRouters/PublicRouter';
import ProtectedRouter from './serviceRouters/ProtectedRouter';
import AcademyManagerRegister from './academyManager/AcademyManagerRegister';
import ViewAcademyManager from './academyManager/ViewAcademyManager';
import ViewAcademyEachManager from './academyManager/ViewAcademyEachManager';
import AcademyMangerUpdate from './academyManager/AcademyMangerUpdate';
import AddAcademyName from './academyManager/AddAcademyName';
import ViewAcademy from './viewAcademy/ViewAcademy';
import EditAcademyDetails from './viewAcademy/EditAcademyDetails';
import AddBranch from './viewAcademy/AddBranch';
import ViewBranch from './viewBranch/ViewBranch';
import UpdateBranch from './viewBranch/UpdateBranch';
import AddCourse from './viewBranch/AddCourse';
import ViewCourse from './viewCourse/ViewCourse';
import UpdateCourse from './viewCourse/UpdateCourse';
import AdminRouter from './serviceRouters/AdminRouter';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<BackGroundImage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<PublicRouter><Login /></PublicRouter>} />
          <Route path="/landingPage" element={<LandingPage />} />

          <Route path="/course" element={<ProtectedRouter><Course /></ProtectedRouter>} />
          <Route path="/enroll" element={<UserEnroll />} />
          <Route path="/AdminRegister" element={<AdminRegister />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/adminDashboard" element={<AdminRouter><AdminDashboard /></AdminRouter>} >
            <Route path="/adminDashboard/addAcademyManager" element={<AdminRouter><AcademyManagerRegister/></AdminRouter>} />
            <Route path="/adminDashboard/viewAcademyManager" element={<AdminRouter><ViewAcademyManager/></AdminRouter>} />
           <Route path="/adminDashboard/viewAcademyManager/viewAcademyEachManager/:id" element={<AdminRouter><ViewAcademyEachManager /></AdminRouter>} />
           <Route path="/adminDashboard/viewAcademyManager/updateAcademyManager/:id" element={<AdminRouter><AcademyMangerUpdate/></AdminRouter>} />
           <Route path="/adminDashboard/viewAcademyManager/addAcademyName/:id" element={<AdminRouter><AddAcademyName/></AdminRouter>} />
           <Route path="/adminDashboard/viewAcademy" element={<AdminRouter><ViewAcademy/></AdminRouter>}/>
           <Route path="/adminDashboard/viewAcademy/editAcademyDetails/:id" element={<AdminRouter><EditAcademyDetails/></AdminRouter>}/>
           <Route path="/adminDashboard/viewAcademy/addBranch/:id" element={<AdminRouter><AddBranch/></AdminRouter>}/>
           <Route path="/adminDashboard/viewBranch" element={<AdminRouter><ViewBranch/></AdminRouter>}/>
           <Route path="/adminDashboard/viewBranch/updateBranch/:id" element={<AdminRouter><UpdateBranch/></AdminRouter>}/>
           <Route path="/adminDashboard/viewBranch/addCourse/:id" element={<AdminRouter><AddCourse/></AdminRouter>}/>
           <Route path="/adminDashboard/viewCourse" element={<AdminRouter><ViewCourse/></AdminRouter>}/>
           <Route path="/adminDashboard/viewCourse/updateCourse/:id" element={<AdminRouter><UpdateCourse/></AdminRouter>}/>
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
