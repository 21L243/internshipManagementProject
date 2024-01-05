import React from 'react';
import './About.css';
import { Link} from "react-router-dom";
function About() {
  return (
    <>
      <div className="design">
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
      <div class="about1">
        
      <h2>About Us</h2>
<p>InnovateTech is a forward-thinking technology company specializing in software development, artificial intelligence, cybersecurity, etc.Founded on the principles of innovation and creativity, InnovateTech has been at the forefront of technological advancements since its inception in 2003.</p>
    <h1>What we Offer</h1>
     <li>Hands-On Experience: Interns participate in real projects, applying theoretical knowledge to practical situations.</li>
     <li>Mentorship and Guidance: Our interns receive mentorship from seasoned professionals, fostering personal and professional growth.</li>
     <li>Innovation Hub: InnovateTech encourages creative thinking and welcomes new ideas, empowering interns to contribute meaningfully.</li>
     <li>Networking Opportunities: Interns engage with professionals, attend tech seminars, and network within the industry.</li>
    </div>
    <div class="image">
    <img src="https://cse.noticebard.com/wp-content/uploads/sites/23/2023/09/Summer-IBM-Remote-Internship-2024.jpg"/>
    </div>
    <div class="image1">
      <img src="https://www.shutterstock.com/image-illustration/design-studio-concept-designers-create-260nw-2323914951.jpg"></img>
</div>
<div class="image2">
      <img src="https://cdn-education.tribune.com.pk/blogs/HwosT56cSdyFQgyPbrPlviyo0ZICJxGndLgHL2Q1.jpeg"></img>
</div>
<div class="image3">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NqNuPFSS9CDh0bZpMzthbCxZbeoHqpLf7g&usqp=CAU"></img>
</div>
<div class="foot">
<footer>
    <p>&copy; 2023 InnovateTech. All rights reserved.</p>
    <div class="icons1">
   
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
export default About;
