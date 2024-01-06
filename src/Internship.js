import React, { useState } from 'react';
import './Internship.css';
import { Link } from "react-router-dom";

function Internship() {
  const initialAccounts = [
    {
      id: 1,
      cname: 'Infosys',
      iname: 'Web Development',
      types:'Full-Time',
      salary: 'Rs.5000',
      sdate: '20 June 2024',
      edate: '20 July 2024',
     
    },
    {
      id: 2,
      cname: 'Zettatone',
      iname: 'Sales Intern',
      types:'Part-Time',
      salary: 'Rs.2000',
      sdate: '13 May 2024',
      edate: '15 June 2024',
     
    },
    {
      id: 3,
      cname: 'CodSoft',
      iname: 'Finance',
      types:' Work from home',
      salary: 'Rs.4000',
      sdate: '30 June 2024',
      edate: '30 July 2024',
     
    },
    {
      id: 4,
      cname: 'Accenture',
      iname: 'Digital Marketing Intern',
      types:'Part-Time',
      salary: 'Unpaid',
      sdate: '10 November 2024',
      edate: '15 December 2024',
     
    },
    {
      id: 5,
      cname: 'Cognizant',
      iname: 'Graphic Design',
      types:'Full-Time',
      salary: 'Rs.1000',
      sdate: '27 June 2024',
      edate: '20 August 2024',
     
    },
    {
      id: 6,
      cname: 'CodSoft',
      iname: 'Software Development',
      types:'Part-Time',
      salary: 'Rs.5000',
      sdate: '20 March 2024',
      edate: '20 April 2024',
     
    },

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
      types:'',
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
      types:'',
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
        <div class="snake3">
           <button>+ New internships</button>
        </div>
        </Link>
        <form class="example3">
  <input type="text" placeholder="Search......" name="search2"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
      <div class="hen33">
        <table>
          <div class="table-container33">
          <tr>
            <th><p>Company Name</p></th>
            <th><p>Internship Name</p></th>
            <th><p>Internship Type</p></th>
            <th><p>Salary</p></th>
            <th><p>Start date</p></th>
            <th><p>End date</p></th>
            <th><p>Action</p></th>
          </tr>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.cname}</td>
              <td>{account.iname}</td>
              <td>{account.types}</td>
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
                    <button className="we11" onClick={() => handleDelete(account.id)}>
                      Delete
                    </button>
                    <button className="we12" onClick={() => handleEdit(account)}>
                      Update
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
          </div>
        </table>
        {editMode.status && (
          <div className="edit-form3">
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
                <label>Internship Type:</label>
              <input
                type="text"
                name="types"
                value={editedAccount.types}
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

export default Internship;
