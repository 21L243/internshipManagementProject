import React from 'react';
import './Home.css';
import { Link} from "react-router-dom";
function Home() {
return (
<>
<div class="design">
<ul>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6EuuU63OPV5tpGuub1gXHMrg3Qlw_jVe2w&usqp=CAU
"></img>
<li id="Contact Us"><a href="Contact">Contact Us</a></li>
<Link to="/intern">
<li id="Internships"><a href="Internships">Internships</a></li>
</Link>
<Link to="/about">
<li id="About us"><a href="About">About Us</a> </li>
</Link>
<Link to="/">
<li id="Home"><a href="home">Home</a></li>
</Link>
</ul>
<div class="design2">
<h1>Take your Career to the next level</h1>
<h2>Join our Exciting Internship</h2>
<Link to="/login">
<div class="b1"><button>Login</button></div>
</Link>
<Link to="Sign">
<div class="b2"> <button>Sign Up</button></div>
</Link>
<Link to="/admin">
<div class="b3"><a>Admin Login</a></div>
</Link>
</div>
</div>

</>
);
}
export default Home;