import React, { useState } from 'react';
import './Feedback2.css';
import { Link} from "react-router-dom";
function Feedback2() {
    const [rating, setRating] = useState(0);

    function handleStarClick(value) {
      setRating(value);
    }
    const handleSubmit=()=>{
        alert("Thankyou for your feedback")
      }
    
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
            </ul>
      </div>
      <div className="ladoo">
      <form onSubmit={handleSubmit}>
      <div className="boot">
        <h1>Feedback Form</h1>
      </div>
      <div className="boot2">
        <p>Please share your opinion</p>
      </div>
      <div className="boot3">
        <p>Rate our services!</p>
      </div>
      <div className="star-rating" data-rating={rating}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={starValue <= rating ? 'star active' : 'star'}
            onClick={() => handleStarClick(starValue)}
          >
            ★
          </span>
        );
      })}
    </div>
    <div class="boot4"><h3>What can be improved?</h3></div>
    <div class="boot5">
        <textarea id="message11" name="message11" placeholder="Let's us know what can be done better" rows="4" cols="50" required></textarea></div> 
        <div class="boot6"><button>Send</button></div>
        </form>
    </div>
    <div class="foot44">
<footer>
    <p>&copy; 2023 InnovateTech. All rights reserved.</p>
    <div class="icons44">
   
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
      export default Feedback2;