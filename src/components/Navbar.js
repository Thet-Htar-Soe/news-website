import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import SearchBar from "./SearchBar";

const NavigationBar = ({ onFilter }) => {
    return (
        <div style={{ backgroundColor: "#364a4d" }}>
            <Navbar expand="lg" style={{ backgroundColor: "#364a4d" }} className="mx-3 justify-content-between">
                <Navbar.Brand href="#"> <img src={logo} alt="News Nexus Logo" height="70" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="custom-mobile-style">
                    <Nav className="mx-auto">
                        <Nav.Link href="#" className="text-white custom-nav-style">Home</Nav.Link>
                        <Nav.Link href="#technology" className="text-white custom-nav-style">Technology</Nav.Link>
                        <Nav.Link href="#science" className="text-white custom-nav-style">Science</Nav.Link>
                        <Nav.Link href="#sport" className="text-white custom-nav-style">Sports</Nav.Link>
                        <Nav.Link href="#entertainment" className="text-white custom-nav-style">Entertainment</Nav.Link>
                    </Nav>
                    <SearchBar className="ml-auto" onFilter={onFilter} />
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}

export default NavigationBar;
