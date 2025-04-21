import React from "react";
import { Link, useNavigate } from "react-router-dom";



function Nav() {
  // Navigation hook
  const navigate = useNavigate();
  // Retrieve the 'user' data from localStorage to check if the user is logged in

  const auth = localStorage.getItem("user");

  function logout() {

    localStorage.clear();//clear storage

    navigate('/signup')//use navigate redirect after  logout

  }


  return (
    <div className="header">
      {/* Logo Section */}
      <div className="logo-div">
        <img src="src/assets/e-dash-icon.png" alt="icon" />
        <span>e-dash</span>
      </div>

      {/* Navigation links */}
      <div>
        {auth ? (
          <ul>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            {/* ({JSON.parse(auth).name}) Acesses user name from local storage */}
          </ul>
        ) : (
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
