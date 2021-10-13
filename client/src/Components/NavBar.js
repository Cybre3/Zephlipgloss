import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavIcon from "./SubComponents/NavIcon";
import AuthApi from "../utils/authApi";

const NavBar = (props) => {
  console.log(AuthApi);
  const authApi = useContext(AuthApi);
  console.log("authApi: ", authApi.auth);
  let token = window.localStorage.cookie; // Returns token or undefined
  console.log("Token: ", token);
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

            { !token ? <Nav.Link href="/login">Login</Nav.Link> : null }
            { !token ? <Nav.Link href="/register">Register</Nav.Link> : null }

            <Nav.Link href="instagram.com">Instgram</Nav.Link>
            <NavDropdown title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item href="/contactus">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <div className="vr ml-3 mr-4"></div>
            <NavIcon class="bi bi-search" />
            <NavIcon class="bi bi-cart" linkTo="/shopping-cart" />
            <NavIcon class="bi bi-person-lines-fill" linkTo="/user" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;