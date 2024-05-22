import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "../components/NewsCard";

const TravelPage = ({ travelnews }) => {
    return (
        <Container fluid>
            <h4 className="mx-3 text-white py-3">Travel</h4>
            <Row className="ms-3 pt-2">
                <Col lg={6} md={6} sm={12}>
                    <h1 className="custom-travel-text">Roam<br /><span className="custom-travel-earth">The earth</span></h1>
                    <p className="w-75 text-justify d-inline-block">Globetrotting. This is a word used to describe someone who's going on a long journey around the world, and a globetrotter is someone who travels a lot, and all over the world, and also especially for sightseeing.</p>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    {travelnews.map((article, index) => (
                        <NewsCard key={index} article={article} customStyle="custom-travel-card" lineClamp={1} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default TravelPage;
