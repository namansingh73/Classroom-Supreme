import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import "../css/Header.css";

import logo from "./logo.png";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        bg="dark"
        className="navb"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <div className="container-fluid navdiv" style={{ fontSize: "1.05rem" }}>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} width="80px"></img>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer className="mx-2" to="/Conference">
                <Nav.Link>
                  <i className="fas fa-lightbulb"></i> Discuss
                </Nav.Link>
              </LinkContainer>
              <LinkContainer className="mx-2" to="/video">
                <Nav.Link>
                  <i className="fas fa-video"></i> Record
                </Nav.Link>
              </LinkContainer>
              <LinkContainer className="mx-2" to="/tutorial">
                <Nav.Link>
                  <i className="fas fa fa-square-o"></i> Tutorials
                </Nav.Link>
              </LinkContainer>
              <NavDropdown
                className="mx-2"
                title={
                  <Fragment>
                    <i className="fas fa-camera"></i> Capture
                  </Fragment>
                }
                id="adminmenu"
              >
                <LinkContainer to="/capture/student">
                  <NavDropdown.Item>Student</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/capture/teacher">
                  <NavDropdown.Item>Teacher</NavDropdown.Item>
                </LinkContainer>
                {/* <a
                  href="https://shikshak.gitaalekhyapaul.com/student"
                  className="dropdown-item"
                >
                  Student
                </a>

                <a
                  href="https://shikshak.gitaalekhyapaul.com/teacher"
                  className="dropdown-item"
                >
                  Teacher
                </a> */}
              </NavDropdown>
              {/* <div>
                  <i className="fas fa-video"></i> Capture
                </div> */}
              {userInfo ? (
                <NavDropdown
                  className="mx-2 "
                  title={userInfo.name}
                  id="username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer className="mx-2 " to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {/* {userInfo && userInfo.isAdmin && (
                <NavDropdown className="mx-2" title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )} */}
              {userInfo && userInfo.isCreator && (
                <NavDropdown title="Creator" id="adminmenu">
                  <LinkContainer to="/cc">
                    <NavDropdown.Item>Course Creator</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
