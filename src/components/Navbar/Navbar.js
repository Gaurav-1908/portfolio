import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () =>{
    return(
        <Navbar expand='lg' className="navbar-expand-lg  navbar-dark fixed-top" data-bs-theme="dark"
          style={{
            backgroundColor:"black",
            borderBottom: "1px solid",
            borderColor: "grey",
            padding:"1%",
            fontSize: "120%"
          }}
        > 
            <Container>
            <Navbar.Brand href="#Home" style={{
                        color:"#39FF14"
                    }}
            >
                Gaurav G...
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
          <Nav className="justify-content-end flex-grow-1 pe-3 me-auto">
            <Nav.Link href="#About">
              About Me
            </Nav.Link>
            <Nav.Link href="#Skills">
              My Skills
            </Nav.Link>
            <Nav.Link href="#Projects">
              Projects
            </Nav.Link>
            <Nav.Link href="#Contact Me">
              Contact Me
            </Nav.Link>
            <Nav.Link target='_Blank' href="/Gaurav_Gadkari_Resume.pdf">
              Resume
            </Nav.Link>
          </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}