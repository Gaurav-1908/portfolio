import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./Navbar/Navbar";
import { InfoBox } from './InfoBox/InfoBox';
import { Container } from 'react-bootstrap';
import { AboutMe } from './AboutMe/AboutMe';
import { Projects } from './Projects/Projects';
import { ContactMe } from './ContactMe/ContactMe';
import { Footer } from './Footer/Footer';
import { Skills } from './Skills/Skills';

export const Layout = () =>{
    return(
        <div style={{
                backgroundColor:"black"
                }}
        >
            <br/>
            <NavBar/>
      
            <hr style = {{
                color:"white"
                }}
            />
            <Container>
                <InfoBox/>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <ContactMe/>
                <Footer/>
            </Container>
    </div>
    )
}