import React, { useState } from 'react';
import './Newinternship.css';
import { Link} from "react-router-dom";

function Newinternship() {
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
        <Link to="/newinternship">
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
        <h1> Add New Internship</h1>
        </div>
        <div class="pussy11">
<form id="adminForm">
  <div>
    <label for="username">Company name</label>
    <input type="username" id="username" name="username" required/>
  </div>
  <div>
    <label for="password">Internship name</label>
    <input type="username" id="password" name="password" required/>
  </div>
  <div class="form-group">
                <label for="salary">Internship Type:</label>
                <input type="username" id="int" name="username" required/>
            </div>
<div class="form-group">
                <label for="salary">Salary:</label>
                <input type="number" id="salary" name="salary" required/>
            </div>

            <div class="form-group">
                <label for="start_date">Start date:</label>
                <input type="date" id="start_date" name="start_date" required/>
            </div>

            <div class="roop1">
                <label for="end_date">End date:</label>
                <input type="date" id="end_date" name="end_date" required/>
            </div>

  <div class="joker11">
    <button> Add Internship</button>
  </div>
</form>
</div>
        </>);
        }
        export default Newinternship;