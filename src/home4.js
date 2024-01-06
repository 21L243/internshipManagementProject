import React, { useState } from 'react';
import './home4.css';
import { Link } from "react-router-dom";

function Home4() {
  const initialAccounts = [
    {
      id: 1,
      username: 'Raj12',
      password: 'Raj1201@',
      name: 'Raj kumar S',
      gender: 'Male'
    },
    {
      id: 2,
      username: 'Senthil27',
      password: 'sen2706@',
      name: 'Senthil kumar N',
      gender: 'Male'
    },
    {
      id: 3,
      username: 'Vani20',
      password: 'Vani2009@',
      name: 'Vani shree B',
      gender: 'Female'
    },
    {
      id: 4,
      username: 'Tamil30',
      password: 'Tamil2003@',
      name: 'Tamilselvam R',
      gender: 'Male'
    },
    {
      id: 5,
      username: 'Anitha26',
      password: 'Anitha2003@',
      name: 'Anitha S',
      gender: 'Female'
    },
    {
      id: 6,
      username: 'Abhi26',
      password: 'Abhi$$@',
      name: 'Abhi S',
      gender: 'Female'
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
    username: '',
    password: '',
    name: '',
    gender: '',
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
      gender: '',
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
        <Link to="/home4">
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
            <h1>Accounts/Student</h1>
        </div>
        <Link to="/student">
        <div class="snake2">
           <button>+ Student</button>
        </div>
        </Link>
        <form class="example">
  <input type="text" placeholder="Search......" name="search2"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
<div class="hen">
    <table>
      <div className='table-container'>
      <thead>
        <tr>
          <th><p>Username</p></th>
          <th><p>Password</p></th>
          <th><p>Name</p></th>
          <th><p>Gender</p></th>
          <th><p>Action</p></th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account) => (
          <tr key={account.id}>
            <td>{account.username}</td>
            <td>{account.password}</td>
            <td>{account.name}</td>
            <td>{account.gender}</td>
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
      </tbody>
      </div>
    </table>


       {editMode.status && (
          <div className="edit-form">
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
              <label>Gender:</label>
              <input
                type="text"
                name="gender"
                value={editedAccount.gender}
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
