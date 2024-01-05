import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container3">
      <div className="container4">
        <form>
          <div className="ss">
            <h1>Login</h1>
          </div>
          <div className="input-container10">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="input-container9">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <div class="but2">
          <Link to="/home2">
          <button type="submit">Login</button>
          </Link>
          </div>
          <div className="ts">
            <p>Don't have an account?</p>
            <Link to="/sign">SignUp</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
