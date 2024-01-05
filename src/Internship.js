import React, { useState } from 'react';
import './home4.css';
import { Link } from "react-router-dom";

function Home4() {
  const initialAccounts = [
    {
      id: 1,
      cname: 'Infosys',
      iname: 'Web Development',
      salary: 'Rs.5000',
      sdate: '20 June 2024',
      edate: '20 July 2024',
     
    },
    {
      id: 2,
      cname: 'Zettatone',
      iname: 'Sales Intern',
      salary: 'Rs.2000',
      sdate: '13 May 2024',
      edate: '15 June 2024',
     
    }

  ];

  const [accounts, setAccounts] = useState(initialAccounts);
  const [showDropdown, setShowDropdown] = useState(false);
  const [editMode, setEditMode] = useState({
    status: false,
    id: null,
  });
  const [editedAccount, setEditedAccount] = useState({
    id: null,
    cname: '',
      iname: '',
      salary: '',
      sdate: '',
      edate: '',
  
  });

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDelete = (id) => {
    const updatedAccounts = accounts.filter(account => account.id !== id);
    setAccounts(updatedAccounts);
  };

  const handleEdit = (account) => {
    setEditMode({
      status: true,
      id: account.id,
    });
    setEditedAccount(account);
  };

  const handleSave = () => {
    const updatedAccounts = accounts.map(account =>
      account.id === editedAccount.id ? editedAccount : account
    );
    setAccounts(updatedAccounts);
    setEditMode({
      status: false,
      id: null,
    });
    setEditedAccount({
      id: null,
      cname: '',
      iname: '',
      salary: '',
      sdate: '',
      edate: '',
    
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAccount({ ...editedAccount, [name]: value });
  };

  return (
    <>
       <div className="design43">
        <ul>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6EuuU63OPV5tpGuub1gXHMrg3Qlw_jVe2w&usqp=CAU"
            alt="Logo"
          />
        </ul>
      </div>
      <div className="admin11">
        <h1>INTERNSHIP MANAGEMENT SYSTEM</h1>
      </div>
      <div className="sidenav">
        <h1>Administrator</h1>
        <Link to="/admin">
        <a href="#">Home</a></Link>
        <Link to="/internship">
        <a href="#" onClick={handleDropdown}>
          Accounts
        </a></Link>
        {showDropdown && (
          <ul className="submenu">
            <li>
            <Link to="/home3">  <a href="#">Administrator</a></Link>
            </li>
             <li>
            <Link to="/home4"> <a href="#">Student</a> </Link>
            </li>
             </ul>
        )}
        <Link to="/internship">
        <a href="#">Upload Internships</a>
        </Link>
        <Link to="/feedback">
        <a href="#">Feedbacks</a></Link>
        </div>
        <div class="snake">
            <h1>Internships</h1>
        </div>
        <Link to="/newinternship">
        <div class="snake1">
           <button>+ New internships</button>
        </div>
        </Link>
        <form class="example">
  <input type="text" placeholder="Search......" name="search2"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
      <div class="hen">
        <table>
          <tr>
            <th>Company Name</th>
            <th>Internship Name</th>
            <th>Salary</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Action</th>
          </tr>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.cname}</td>
              <td>{account.iname}</td>
              <td>{account.salary}</td>
              <td>{account.sdate}</td>
              <td>{account.edate}</td>
              <td>
                {editMode.status && editMode.id === account.id ? (
                  <button className="we" onClick={handleSave}>
                    Save
                  </button>
                ) : (
                  <>
                    <button className="we1" onClick={() => handleDelete(account.id)}>
                      Delete
                    </button>
                    <button className="we2" onClick={() => handleEdit(account)}>
                      Update
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </table>
        {editMode.status && (
          <div className="edit-form">
            <h2>Edit Account</h2>
            <form>
              <label>Companyname:</label>
              <input
                type="text"
                name="cname"
                value={editedAccount.cname}
                onChange={handleInputChange}
              />
              <label>Internshipname:</label>
              <input
                type="text"
                name="iname"
                value={editedAccount.iname}
                onChange={handleInputChange}
              />
              <label>Salary:</label>
              <input
                type="text"
                name="salary"
                value={editedAccount.salary}
                onChange={handleInputChange}
              />
               <label>Start date:</label>
              <input
                type="text"
                name="sdate"
                value={editedAccount.sdate}
                onChange={handleInputChange}
              />
               <label>End date:</label>
              <input
                type="text"
                name="edate"
                value={editedAccount.edate}
                onChange={handleInputChange}
              />
             
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Home4;
