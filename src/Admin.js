import React, { useState } from 'react';
import './Admin.css';
import { Link} from "react-router-dom";
function Admin() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="design43">
        <ul>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6EuuU63OPV5tpGuub1gXHMrg3Qlw_jVe2w&usqp=CAU"
            alt="Logo"
          />
        </ul>
      </div>
      <div className="admin11">
        <h1>INTERNSHIP MANAGEMENT SYSTEM</h1>
      </div>
      <div className="sidenav">
        <h1>Administrator</h1>
        <Link to="/admin">
        <a href="#">Home</a>
        </Link>
        <Link to="/admin">
        <a href="#" onClick={handleDropdown}>
          Accounts
        </a>
        </Link>
        {showDropdown && (
         <ul className="submenu">
         <li>
         <Link to="/home3">  <a href="#">Administrator</a></Link>
         </li>
          <li>
         <Link to="/home4"> <a href="#">Student</a> </Link>
         </li>
        
       </ul>
        )}
        <Link to="/internship">
        <a href="#">Upload Internships</a></Link>
        <Link to="/feedback"> <a href="#">Feedbacks</a></Link>
        
  <div class="but23">
    <Link to="/">
    <button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </button>
        </Link>
        </div>
        </div>
      <div class="ram">
        <h1>VISION</h1>
        <h2>Excellence in producing highly skilled, well qualified students in the job industry</h2>
      </div>
      <div class="ram1">
        <h1>MISSION</h1>
        <h2>Committed to provide affordable and high quality workers</h2>
      </div>
      <div class="ram2">
        <h1>OBJECTIVE</h1>
            <h2>1) Prepare student to be well equiped in the job industry.</h2>
            <h2>2) Posses knowledge and skills that would prepare students to improve their wirking skills.</h2>
      </div>
    </>
  );
}

export default Admin;
