import React, { useState } from 'react';
import './home3.css';
import { Link } from "react-router-dom";

function Home3() {
  const initialAccounts = [
    {
      id: 1,
      username: 'Ramiya28',
      password: 'Ramiya28@',
      name: 'Ramiya Sri S',
     
    },
    {
      id: 2,
      username: 'Roopika28',
      password: 'roopika2802@',
      name: 'Roopika Sree S',
    },
    {
      id: 3,
      username: 'Tamil3010',
      password: 'devi@2003',
      name: 'Tamilselvam R',
    },
    {
      id: 4,
      username: 'Senthil27',
      password:"sen802@",
      name: 'Senthil Kumar N',
    },
    {
      id: 5,
      username: 'Jaya1975',
      password: 'jayashree@',
      name: 'Jaya Shree C',
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
    username: '',
    password: '',
    name: '',
  
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
      username: '',
      password: '',
      name: '',
    
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
        <Link to="/home3">
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
            <h1>Accounts/Administrator</h1>
        </div>
        <Link to="/adminadd">
        <div class="snake1">
           <button>+ Admin</button>
        </div>
        </Link>
        <form class="example1">
  <input type="text" placeholder="Search......" name="search2"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
      <div class="hen1">
        <table>
        <div class="table-container1">
          <tr>
            <th><p>Username</p></th>
            <th><p>Password</p></th>
            <th><p>Name</p></th>
            <th><p>Action</p></th>
          </tr>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.username}</td>
              <td>{account.password}</td>
              <td>{account.name}</td>
             
              <td>
                {editMode.status && editMode.id === account.id ? (
                  <button className="we" onClick={handleSave}>
                    Save
                  </button>
                ) : (
                  <>
                    <button className="we21" onClick={() => handleDelete(account.id)}>
                      Delete
                    </button>
                    <button className="we22" onClick={() => handleEdit(account)}>
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
          <div className="edit-form1">
            <h2>Edit Account</h2>
            <form>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={editedAccount.username}
                onChange={handleInputChange}
              />
              <label>Password:</label>
              <input
                type="text"
                name="password"
                value={editedAccount.password}
                onChange={handleInputChange}
              />
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editedAccount.name}
                onChange={handleInputChange}
              />
             
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Home3;
