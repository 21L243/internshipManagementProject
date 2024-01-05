import {Route,Routes} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Sign from "./Sign";
import Contact from"./Contact";
import Home2 from './Home2';
import Intern from "./Intern";
import Sign2 from "./Sign2";
import Register from "./Register";
import Apply from "./Apply";
import Admin from "./Admin";
import Home3 from "./Home3";
import Home4 from "./home4";
import Internship from "./Internship";
import Adminadd from "./Adminadd";
import Student from "./Student";
import Newinternship from "./Newinternship";
import Feedback from "./Feedback";
import Feedback2 from "./Feedback2";
function App() {
  return (
   <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about"element={<About/>}></Route>
        <Route path="/login"element={<Login/>}></Route>
        <Route path="/sign"element={<Sign/>}></Route>
        <Route path="/contact"element={<Contact/>}></Route>
        <Route path="/home2"element={<Home2/>}></Route>
        <Route path="/intern"element={<Intern/>}></Route>
        <Route path="/sign2"element={<Sign2/>}></Route>
        <Route path="/register"element={<Register/>}></Route>
        <Route path="/apply"element={<Apply/>}></Route>
        <Route path="/admin"element={<Admin/>}></Route>
        <Route path="/home3"element={<Home3/>}></Route>
        <Route path="/home4"element={<Home4/>}></Route>
        <Route path="/internship"element={<Internship/>}></Route>
        <Route path="/adminadd"element={<Adminadd/>}></Route>
        <Route path="/student"element={<Student/>}></Route>
        <Route path="/newinternship"element={<Newinternship/>}></Route>
        <Route path="/feedback"element={<Feedback/>}></Route>
        <Route path="/feedback2"element={<Feedback2/>}></Route>
        </Routes>
         );
}

export default App;
