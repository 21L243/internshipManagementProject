import React from 'react';
import { Link} from "react-router-dom";
import './Sign2.css';
function Sign2() {
return (
<>

<div class="design34">
<div class="sss">
    <h2>Signed Up Successfully , Click the below button to Login</h2>
</div>
<Link to="/Login" >
<div class="sss1">
    <button>Login</button>
</div>
</Link>
</div>
</>
);
}
export default Sign2;