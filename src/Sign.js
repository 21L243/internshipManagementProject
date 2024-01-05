import React from 'react';
import { Link} from "react-router-dom";
import './Sign.css';
function Sign() {
return (
<>
<div class="container1">
<div class="container2">
<h1>SignUp</h1>
<form>
<div class="input-container1">
<label for="name">Name</label>
<input type="name" id="name" name="name" placeholder="Enter your name"
required />
</div>
<div class="input-container1">
<label for="email">Email</label>
<input type="email" id="email" name="email" placeholder="Enter your 
email" required />
</div>
<div class="input-container1">
<label for="password">Password</label>
<input type="password" id="password" name="password" placeholder="Enter 
your password" required />
</div>
<div class="input-container1">
<label for="confirm-password">Confirm Password</label>
<input type="password" id="confirm-password" name="confirm-password"
placeholder="Confirm your password" required />
</div>
<div class="but1">
<Link to="/sign2">
<button type="submit">Sign Up</button>
</Link>
</div>
<div class="gg">
<p>Already have an account?</p>
<Link to="/login">
<a href="login"> Login </a>
</Link>
</div>
</form>
</div>
</div>
</>
);
}
export default Sign;