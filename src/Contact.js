import './Contact.css';
import React, { useState } from 'react';
import { Link} from "react-router-dom";
function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      message: event.target.elements.message.value,
    };

    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };
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
          <li className="dropdown">
            <a href="/internships">Internships</a>
          </li>
          </Link>
          <Link to="/contact">
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
      <div class="head">
      <h1>Get To Know Us</h1>
      </div>
      <div  class="form">
      <form onSubmit={handleSubmit}>
        <div class="ruby">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="message">Message:</label><br />
       <div class="for"><textarea id="message" name="message" rows="4" cols="50" required></textarea><br /><br /></div> 

        <input type="submit" value="Submit" />
        </div>
      </form>
      </div>
      <div class="foot2">
<footer>
    <p>&copy; 2023 InnovateTech. All rights reserved.</p>
    
    <div class="icons">
   
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

export default Contact; 