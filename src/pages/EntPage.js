import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import NewsCard from "../components/NewsCard";

const EntPage = ({entnews}) =>{
    return(
        <Container fluid>
            <h4 className="mx-3 text-white py-3">Entertainment</h4>
            <Row>
                {entnews.map((article,index)=>(
                    <Col lg={4} md={6} sm={12}>
                    <NewsCard key={index} article={article}  customStyle="custom-ent-card" lineClamp={1}/>
                </Col>
                ))}
                
            </Row>
        </Container>
    )
}

export default EntPage;
