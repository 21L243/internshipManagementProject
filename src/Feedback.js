import React, { useState } from 'react';
import './feedback.css';
import { Link} from "react-router-dom";

function Feedback() {
  
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
        <Link to="/feedback">
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
        <div class="parrot">
            <h1>Feedbacks</h1>
        </div>
        <form class="exampless">
  <input type="text" placeholder="Search......" name="search2"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
        <div class="henss">
        <table>
          <div class="tables">
  <tr>
   <th><p>Name</p></th>
   <th><p>Email</p></th>
   <th><p>Suggestions</p></th>
    <th><p>Ratings</p></th>
  </tr>
  <tr>
    <td>Roopika Sree S</td>
    <td>roopika28@gmail.com</td>
    <td>Time Management</td>
    <td>
    <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
</td>
  </tr>
  <tr>
    <td>Jayashree C</td>
    <td>jayashree27@gmail.com</td>
    <td>Create an intern-specific referral program</td>
    <td>  <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span></td>
  </tr>
  <tr>
    <td>Tamilselvam R</td>
    <td>tamil30@gmail.com</td>
    <td>Internship salary is less</td>
    <td>  <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span></td>

  </tr>
  <tr>
    <td>Ramiya Sri S</td>
    <td>ramiyasri28srs@gmail.com</td>
    <td>Language Problem</td>
    <td>  <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star "></span>
<span class="fa fa-star"></span></td>

  </tr>
  <tr>
    <td>Ramiya Sri S</td>
    <td>ramiyasri28srs@gmail.com</td>
    <td>Offer more paid internship</td>
    <td>  <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></td>

  </tr>
  
  </div>
</table>
</div>



        </>);
        }
        export default Feedback;