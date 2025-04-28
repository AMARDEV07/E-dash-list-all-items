import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {


  const navigate = useNavigate();//hooks

  const auth = localStorage.getItem("user"); //  Get 'user' data from localStorage (it contains user info & token)
  let userName = "";  // Initialize userName to display later

 
  const parsed = JSON.parse(auth); // Safely parse localStorage JSON to extract user name
  userName = parsed?.result?.name || parsed?.name || ""; // If "result.name" exists, use it


  function logout() {
    localStorage.clear();
    navigate('/signup');
  }

  return (
    <div className="header">

      {/*  Logo Section */}
      <div className="logo-div">
        <img src="src/assets/e-dash-icon.png" alt="icon" />
        <span>e-dash</span>
      </div>

      {/*  Navigation Links */}
      <div>
        {/* auth means data get ho gya h localStorage sa  */}
        {auth ? (
          //  Show these links only when user is logged in
          <ul>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update/:id">Update Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to="/signup">Logout ({userName}) {/*  Displays name like: Logout (Aman) */}</Link></li>
          </ul>)
           : 
           (
          //  If not logged in, show Signup and Login links
          <ul>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Nav;
