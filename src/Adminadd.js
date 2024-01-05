import React, { useState } from 'react';
import './Adminadd.css';
import { Link} from "react-router-dom";

function Adminadd() {
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
        <a href="#">Home</a></Link>
        <Link to="/adminadd">
        <a href="#" onClick={handleDropdown}>
          Accounts
        </a></Link>
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
        <a href="#">Upload Internships</a>
        </Link>
        <Link to="/feedback">
        <a href="#">Feedbacks</a></Link>
        </div>
        <div class="pussy">
        <h1> Add Admin</h1>
        </div>
        <div class="pussy12">
<form id="adminForm">
  <div>
    <label for="username">Username:</label>
    <input type="username" id="username" name="username" required/>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required/>
  </div>
  <div>
    <label for="password">name:</label>
    <input type="name" id="name" name="name" required/>
  </div>
  <div class="joker">
    <button> Add Admin</button>
  </div>
</form>
</div>
        </>);
        }
        export default Adminadd;