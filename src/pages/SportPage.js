import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "../components/NewsCard";

const SportPage = ({ sportnews }) => {
    return (
        <Container fluid>
            <h4 className="mx-3 text-white py-3">Sports</h4>
            <Row>
                {sportnews.map((article, index) => {
                    if (index === 0) {
                        return <Col lg={8} md={8} sm={12}>
                            <NewsCard key={index} article={article} customStyle="custom-sport-card" lineClamp={3} />
                        </Col>
                    }
                    else {
                        return <Col lg={4} md={4} sm={12}>
                            <NewsCard key={index} article={article} customStyle="custom-sport-card" lineClamp={3} />
                        </Col>
                    }
                }
                )
                }
            </Row>
        </Container>
    )
}

export default SportPage;
