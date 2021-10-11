import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
import NavIcon from "./SubComponents/NavIcon";

const NavBar = (props) => {
  return (
    <div className="m-3">
      <Navbar expand="md">
        {/* navbar icon/picture */}
        <Navbar.Brand href="/">
          <img src={props.image} alt="logo" className="navbar-image" width="220" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0 navbar-nav navbar-text"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" active>
              Home
            </Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/sale">SALE</Nav.Link>
            <Nav.Link href="/shopping-cart">Cart</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="instagram.com">Instgram</Nav.Link>
            <NavDropdown title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item href="/contactus">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <div className="vr ml-3 mr-4"></div>
            <NavIcon className="bi bi-search" />
            <NavIcon className="bi bi-cart" linkTo="/shopping-cart" />
            <NavIcon className="bi bi-person-lines-fill" linkTo="/user" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <nav className="navbar navbar-expand-md navbar-light border border-dark">
        <a className="navbar-brand" href="/">
          <img src={props.image} alt="logo" className="navbar-image" width="220" height="100" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-text">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">
                shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sale">
                SALE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/instagram">
                Instagram
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  );
};

export default NavBar;

// MO version
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//     return (
//         <nav>
//             <div>
//                 <Link to="/">Home</Link>
//                 <Link to="/shop">Shop</Link>
//                 <Link to="/sale">Sale</Link>
//             </div>
//         </nav>
//     );
// }

// export default NavBar;
