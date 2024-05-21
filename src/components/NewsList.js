import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import NewsCard from "./NewsCard";

const NewsList = ({ articles }) => {
    return (
        <Container fluid>

            <Row>
                {articles.map((article, index) => (
                    <Col key={index} className="d-flex justify-content-center">
                        <NewsCard article={article} />
                    </Col>
                )
                )}
            </Row>

        </Container>
    )
}

export default NewsList;
