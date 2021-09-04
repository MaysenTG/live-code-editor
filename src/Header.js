import './App.css';
import React from 'react';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import beautify from 'beautify';

function HeadingNav(props) {
    
    function saveHTML(){
        localStorage.setItem('LiveWebDataHTML', props.html)
        localStorage.setItem('LiveWebDataCSS', props.css)
    }
    
    return (
        <Navbar {...props} fluid="true" collapseOnSelect expand="xl">
            <Container>
            <Navbar.Brand href="#home">Live HTML/CSS/JS Webpage Editor</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav onSelect={(selectedKey) => alert(`${selectedKey}`)}>
                        <Nav.Item>
                            <Nav.Link eventKey={"Data has been saved!"} onClick={saveHTML} href="/live-web-code-editor/">Save</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={beautify(`${props.wholehtml}`, {format: 'html'})} title="Item">
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