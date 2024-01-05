import React from 'react';
import './Home2.css';
import { Link} from "react-router-dom";
function Home2() {
 
  return (
    <>
      <div className="design1">
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
          <div className="qqqq">
  <li>
      <Link to="/about" >
        About Us
      </Link>
    </li>
</div>

          <Link to="/home2">
          <li id="Home">
         <a href="/home">Home</a>
         </li>
           </Link>
            </ul>cd 
      </div>
     
     <div class="name">
     <div class="fulls">
      <img src="https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"></img>
        <h1>Profile</h1>
      </div>
       </div>
       <div class="full">
        <h3>Roopika Sree S</h3>
        
  </div>
  
  <div class="full1"><h3>roopikasree28srs@gmail.com</h3></div>
  <Link to="/Register">
  <div class="pot" >
 
    <a href='/registered'>Registered Internships</a>
    </div>
    </Link >
    <Link to="/feedback2">
    <div class="pot2"><a>Feedback</a></div>
    </Link>
  <div class="but">
    <Link to="/">
  <a href="#" class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </a>
        </Link>
        </div>
        <div class="image-container">
  <img src="https://cse.noticebard.com/wp-content/uploads/sites/23/2023/10/Hardware-Engineering-Google-Internship-2023.jpg" />
  
</div>
<div class="image-container1">
  <img src="https://cedmapindia.mp.gov.in/uploads/files/internship.jpeg" />
  
</div>
<div class="image-container3">
  <img src="https://startupsmagazine.co.uk/sites/default/files/2020-11/AdobeStock_291895827ed.jpg" />
  </div>

<div class="ff">
  <h1>Join our Exciting Internship</h1>
</div>
<div class="foot11">
<footer>
    <p>&copy; 2023 InnovateTech. All rights reserved.</p>
    <div class="icons11">
   
    <a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>
<a href="#" class="fa fa-linkedin"></a>
<a href="#" class="fa fa-youtube"></a>
<a href="#" class="fa fa-instagram"></a>
</div>
  </footer>
  </div>
    </>
    
      );
      }
      export default Home2;