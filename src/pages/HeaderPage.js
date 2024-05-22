import React from "react";
import { Container } from "react-bootstrap";
import NewsList from "../components/NewsList";

const HeaderPage = ({ articles }) => {
    return (
        <Container fluid className="flex-grow-1" style={{ backgroundColor: "#364a4d" }}>
            <div className="w-100">
                <h1 className="text-capitalize text-light text-center mb-5">Read the latest news</h1>
                <NewsList articles={articles} customStyle="custom-card" />

            </div>
        </Container>
    )
}

export default HeaderPage;
