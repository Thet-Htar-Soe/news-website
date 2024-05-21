import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';
import SearchBar from "./SearchBar";

const NavigationBar = () => {
    return (
        <div style={{ backgroundColor: "#364a4d" }}>
            <Navbar style={{ backgroundColor: "#364a4d" }} className="mx-3 navbar-expand-lg justify-content-between">
                <Navbar.Brand href="#"> <img src={logo} alt="News Nexus Logo" height="70" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between w-100">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#technology" className="text-white">Technology</Nav.Link>
                        <Nav.Link href="#travel" className="text-white">Travel</Nav.Link>
                        <Nav.Link href="#finance" className="text-white">Finance</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <SearchBar className="ml-auto" />
            </Navbar>
        </div>
    )
}

export default NavigationBar;
