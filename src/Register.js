import React from 'react';
import './Register.css';
import { Link} from "react-router-dom";
function Register() {
  return (
    <>
      <div className="design90">
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
      <div class="oo">
        <h1>Registered Internships</h1>
 </div>

 <div className="card-container100">
        <div className="card1">
          <img src="https://octanet.in/storage/2023/04/we-1024x538.jpg"></img>
          <h2>Web Development</h2>
          <p><b>Company : </b>INFOSYS</p>
          <p><b>Job Type :</b> Work from Home</p>
          <p><b>Salary : </b>unpaid</p>
          <p><b>Duration :</b> 20 May 2023 - 20 December 2023</p>
        </div>

        <div className="card11">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jDrl0Fd2sLTgQtFp-uEnJEJvyLj63W_4NLM0zxSHapV8zuCH3Q3FcS5pvEG8l95usKk&usqp=CAU"></img>
          <h2>Sales and Digital Marketing</h2>
          <p><b>Company :</b> ZETTATONE</p>
          <p><b>Job Type : </b>Full-time</p>
          <p><b>Salary : </b>Rs.5000</p>
          <p><b>Duration : </b>15 February 2024 - 20 March 2024</p>
        </div>

        <div className="card12">
        <img src="https://wowplus.net/wp-content/uploads/2021/06/Finance-internship.jpeg"></img>
          <h2>Finance</h2>
          <p><b>Company :</b> UCFER</p>
          <p><b>Job Type :</b> Part-time</p>
          <p><b>Salary : </b>Rs.2000</p>
          <p><b>Duration : </b>15 May 2024 - 20 June 2024</p>
        </div>
      </div>
 <div class="foot00">
<footer>
    <p>&copy; 2023 InnovateTech. All rights reserved.</p>
    <div class="icons00">
   
    <a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>
<a href="#" class="fa fa-linkedin"></a>
<a href="#" class="fa fa-youtube"></a>
<a href="#" class="fa fa-instagram"></a>
</div>
  </footer>
  </div>
      </>
      );}
      export default Register;