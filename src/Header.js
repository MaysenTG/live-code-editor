import './App.css';
import React from 'react';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import beautify from 'beautify';

function HeadingNav(props) {
    return (
        <Navbar {...props} fluid collapseOnSelect expand="xl">
            <Container>
            <Navbar.Brand href="#home">Live HTML/CSS/JS Webpage Editor</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav onSelect={(selectedKey) => alert(`${selectedKey}`)}>
                        <Nav.Link eventKey={"WARNING: DOES NOT SAVE: Work In Progress"} href="/">Save</Nav.Link>
                        <Nav.Item>
                            <Nav.Link eventKey={beautify(`${props.wholeHtml}`, {format: 'html'})} title="Item">
                                View Source Code
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Work In Progress" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Another action</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    );
  }

export default HeadingNav;