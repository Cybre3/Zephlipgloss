import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>shop</a>
          </li>
          <li>
            <a>SALE</a>
          </li>
          <li>
            <a>Instagram</a>
          </li>
          <li>
            <a>Explore</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
