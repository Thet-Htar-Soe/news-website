import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/logo.png';

const FooterPage = () => {
    return (
        <Container fluid>

            <Row className="text-light py-4">

                <Col md={3} sm={6} className="mb-3">
                    <h5 className="mb-3"><img src={logo} alt="logo" width="70px" /> News Nexus</h5>
                    <ul className="list-unstyled">
                        <li><i className="fas fa-phone"></i> +60 091234 56789</li>
                        <li><i className="fas fa-envelope"></i> admin@newsnexus.com</li>
                        <li><i className="fas fa-map-marker-alt"></i> Cyberjaya, Selangor, Malaysia.</li>
                    </ul>
                </Col>

                <Col md={3} sm={6} className="mb-3">
                    <h5 className="mb-3">Visit Us</h5>

                    <div className="socialicons">
                        <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </Col>

                <Col md={3} sm={6} className="mb-3">
                    <h5 className="mb-3">Get In Touch</h5>

                    <ul className="list-unstyled">
                        <li><a href="#" className="text-uppercase footerlinks">Advertising</a></li>
                        <li><a href="#" className="text-uppercase footerlinks">Contact</a></li>
                        <li><a href="#" className="text-uppercase footerlinks">Job Posting</a></li>
                    </ul>
                </Col>


                <Col md={3} sm={6} className="mb-3">
                    <h5 className="mb-3">Download app:</h5>

                    <ul className="list-unstyled">
                        <li><a href="#" className="nav-link">Documentation</a></li>
                        <li><a href="#" className="nav-link">Google Play Store</a></li>
                        <li><a href="#" className="nav-link">Apple Store</a></li>
                        <li><a href="#" className="nav-link">Direct Link</a></li>
                    </ul>
                </Col>


            </Row>

            <div className="text-light d-flex justify-content-center border-top pt-4">
                <p>&copy;<span></span> Copyright, Inc. Allrights reserved.</p>
            </div>

        </Container>
    )
}

export default FooterPage;
