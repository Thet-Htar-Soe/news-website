import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import NewsCard from "./NewsCard";

const NewsList = ({ articles, customStyle }) => {
    return (
        <Container fluid>

            <Row>
                {articles.map((article, index) => (
                    <Col key={index} className="d-flex justify-content-center mb-3">
                        <NewsCard article={article} customStyle={customStyle} />
                    </Col>
                )
                )}
            </Row>

        </Container>
    )
}

export default NewsList;
