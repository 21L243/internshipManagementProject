import React from 'react';
import './Intern.css';
import { useState } from 'react';
import { Link} from "react-router-dom";
function Intern() {
    const [location, setLocation] = useState('');
    const [position, setPosition] = useState('');
    const [workType, setWorkType] = useState('');
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
      const clearFilters = () => {
        setLocation('');
        setPosition('');
        setWorkType('');
        setMinSalary('');
        setMaxSalary('');
      };
  return (
    <>
      <div className="design7">
        <ul>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6EuuU63OPV5tpGuub1gXHMrg3Qlw_jVe2w&usqp=CAU"></img>
          <Link to="/contact">
          <li id="ContactUs">
            <a href="/contact">Contact Us</a>
          </li>
          </Link>
          <Link to="/intern">
          <li id="Internships">
            <a href="/internships">Internships</a>
          </li>
          </Link>
          <Link to="/about">
           <li id="AboutUs">
           <a href="/about">About Us</a>
            </li>
            </Link>
          <Link to="/home2">
          <li id="Home">
         <a href="/home">Home</a>
         </li>
           </Link>
            </ul>
        </div>
        <div class="width">
            <div class="h1">
      <h1>Internship Filter</h1>
      </div>
      <div class="h2">
<label htmlFor="position">Internship Position:</label>
<select
  id="position"
  value={position}
  onChange={(e) => setPosition(e.target.value)}
>
  <option value="">All</option>
  <option value="Marketing Intern">Web Development Intern</option>
  <option value="Software Development Intern">Software Development Intern</option>
  <option value="Data Science Intern">Data Science Intern</option>
  <option value="Finance Intern">Finance Intern</option>
  <option value="Graphic Design Intern">Graphic Design Intern</option>
  <option value="Human Resources Intern">Human Resources Intern</option>
  <option value="Business Development Intern">Business Development Intern</option>
  <option value="Social Media Intern">Social Media Intern</option>
  <option value="Sales Intern">Sales Intern</option>
  <option value="Content Writing Intern">Content Writing Intern</option>
  <option value="UX/UI Design Intern">UX/UI Design Intern</option>
  <option value="Customer Service Intern">Customer Service Intern</option>
  <option value="Project Management Intern">Project Management Intern</option>
  <option value="Event Planning Intern">Event Planning Intern</option>
  <option value="Public Relations Intern">Public Relations Intern</option>
 
</select>
</div>
<br></br>
<div class="j3">
<label htmlFor="location">Location:</label>
<select
  id="location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
>
  <option value="">All</option>
  <option value="Coimbatore">Coimbatore</option>
  <option value="Chennai">Chennai</option>
  <option value="Bangalore">Bangalore</option>
  <option value="Hyderabad">Hyderabad</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Delhi">Delhi</option>
  <option value="Kolkata">Kolkata</option>
  <option value="Pune">Pune</option>
  <option value="Jaipur">Jaipur</option>
  <option value="Ahmedabad">Ahmedabad</option>
  <option value="Lucknow">Lucknow</option>
  <option value="Surat">Surat</option>
  <option value="Visakhapatnam">Visakhapatnam</option>
  <option value="Nagpur">Nagpur</option>
  <option value="Kanpur">Kanpur</option>
  <option value="Patna">Patna</option>
  <option value="Bhopal">Bhopal</option>
  <option value="Ludhiana">Ludhiana</option>
  <option value="Agra">Agra</option>
  <option value="Nashik">Nashik</option>
</select>
</div>
<div class="j4">
 <label>
          <input
            type="radio"
            value="Part-Time"
            checked={workType === 'Part-Time'}
            onChange={() => setWorkType('Part-Time')}
          />
          Part-Time
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            value="Full-Time"
            checked={workType === 'Full-Time'}
            onChange={() => setWorkType('Full-Time')}
          />
          Full-Time
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            value="Work from Home"
            checked={workType === 'Work from Home'}
            onChange={() => setWorkType('Work from Home')}
          />
          Work from Home
        </label>
        </div>
        <div class="kk">
        <label htmlFor="minSalary">Minimum Salary:</label>
        <input
          type="number"
          id="minSalary"
          value={minSalary}
          onChange={(e) => setMinSalary(e.target.value)}
          placeholder="Minimum Salary"
        />
    </div><div class="kk1">
        <label htmlFor="maxSalary">Maximum Salary:</label>
        <input
          type="number"
          id="maxSalary"
          value={maxSalary}
          onChange={(e) => setMaxSalary(e.target.value)}
          placeholder="Maximum Salary"
        />
        </div>
        <div class="fg">
        <button onClick={clearFilters}>Clear All</button>
        </div>
        <div class="fg1">
        <button>Submit</button>
        </div>
     </div>
     <div className="card-container101">
        <div className="card20">
          <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Data_Science.jpg"></img>
          <h2>Data Science</h2>
          <p><b>Company : </b>INFOSYS</p>
          <p><b>Job Type :</b> Work from Home</p>
          <p><b>Salary : </b>unpaid</p>
          <p><b>Duration :</b> 20 May 2023 - 20 December 2023</p>
          <Link to="/apply"> <button>Apply</button></Link> 
        </div>

        <div className="card21">
          <img src="https://www.ocode.co/wp-content/uploads/2023/08/ui-ux-design.jpeg"></img>
          <h2>UX/UI Design</h2>
          <p><b>Company :</b> ZETTATONE</p>
          <p><b>Job Type : </b>Full-time</p>
          <p><b>Salary : </b>Rs.5000</p>
          <p><b>Duration : </b>15 February 2024 - 20 March 2024</p>
          <Link to="/apply"> <button>Apply</button></Link> 
        </div>
        <div className="card22">
        <img src="https://asapkerala.gov.in/wp-content/uploads/2022/06/project-management.jpg"></img>
          <h2>Project Management</h2>
          <p><b>Company :</b> UCFER</p>
          <p><b>Job Type :</b> Part-time</p>
          <p><b>Salary : </b>Rs.2000</p>
          <p><b>Duration : </b>15 May 2024 - 20 June 2024</p>
          <Link to="/apply"> <button>Apply</button></Link> 
        </div>

        <div className="card23">
        <img src="https://www.animationkolkata.com/blog/wp-content/uploads/2019/09/Graphic-design.jpg"></img>
          <h2>Graphic Design</h2>
          <p><b>Company :</b> ACCENTURE</p>
          <p><b>Job Type :</b> Part-time</p>
          <p><b>Salary : </b>Rs.3000</p>
          <p><b>Duration : </b>17 October 2024 - 20 November 2024</p>
          <Link to="/apply"> <button>Apply</button></Link> 
        </div>
        <div className="card24">
        <img src="https://www.xprosolutions.co.in/wp-content/uploads/2018/06/software-development.jpg"></img>
          <h2>Software Development</h2>
          <p><b>Company :</b> CODSOFT</p>
          <p><b>Job Type :</b> Work from home</p>
          <p><b>Salary : </b>unpaid</p>
          <p><b>Duration : </b>23 November 2024 - 27 December 2024</p>
          <Link to="/apply"> <button>Apply</button></Link> 
        </div>
        <div className="card25">
        <img src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/04/HR-intern-la-gi.jpg"></img>
          <h2>Human Resource</h2>
          <p><b>Company :</b> COGNIZANT</p>
          <p><b>Job Type :</b> Full-time</p>
          <p><b>Salary : </b>Rs.1000</p>
          <p><b>Duration : </b>18 May 2024 - 2 June 2024</p>
          <Link to="/apply"> <button>Apply</button></Link> 
        </div>
      </div>
   <div class="foot12">
<footer>
    <p>&copy; 2023 InnovateTech. All rights reserved.</p>
    <div class="icons12">
   
    <a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>
<a href="#" class="fa fa-linkedin"></a>
<a href="#" class="fa fa-youtube"></a>
<a href="#" class="fa fa-instagram"></a>
</div>
  </footer>
  </div>
     </>);}
     export default Intern;