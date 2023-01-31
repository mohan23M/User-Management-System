import React from 'react';
import { Link } from 'react-router-dom';
import "../components/navbar.css";
function NavBar() {
  return (
    <div>
        <nav>
            <h1>User Data</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar