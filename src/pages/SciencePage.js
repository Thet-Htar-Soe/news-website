import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "../components/NewsCard";
import { ReactTyped } from "react-typed";

const SciencePage = ({ scienceNews }) => {
    return (
        <Container fluid>
            <h4 className="mx-3 text-white py-3">Science</h4>
            <Row className="ms-3 pt-2">
                <Col lg={6} md={6} sm={12}>
                    <h1 className="custom-travel-text">Roam<br />
                        <span className="custom-travel-earth">
                            <ReactTyped startWhenVisible strings={["The Earth"]} typeSpeed={80} /></span></h1>
                    <p className="w-75 text-justify d-inline-block">"Space is for everybody. It’s not just for a few people in science or math, or for a select group of astronauts. That’s our new frontier out there, and it’s everybody’s business to know about space."</p>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    {scienceNews.map((article, index) => (
                        <NewsCard key={index} article={article} customStyle="custom-travel-card" lineClamp={1} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default SciencePage;
