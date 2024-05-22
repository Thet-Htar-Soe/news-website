import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "../components/NewsCard";

const TechnologyPage = ({ technews }) => {
    const mainArticle = technews[0];
    const sideArticles = technews.slice(1, 3);
    return (
        <Container fluid className="">
            <h4 className="mx-3 text-white py-3">Technology</h4>
            <Row className="d-flex align-items-stretch">
                <Col lg={7} md={7} sm={12} className="d-flex flex-column">
                    {mainArticle && <NewsCard article={mainArticle} customStyle="custom-tech-card-left" lineClamp={3} />}
                </Col>
                <Col lg={5} md={7} sm={12} className="d-flex flex-column align-items-center justify-content-between custom-border-left">
                    {sideArticles.map((article, index) => (
                        <NewsCard key={index} article={article} customStyle="custom-tech-card" lineClamp={1} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default TechnologyPage;
