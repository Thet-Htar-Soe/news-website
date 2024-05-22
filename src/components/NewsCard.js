import React from "react";
import { Card } from "react-bootstrap";

const titleStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginBottom: '10px',
};

const getDescriptionStyle = (lineClamp) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: lineClamp,
    WebkitBoxOrient: 'vertical',
    wordWrap: 'break-word',
});

const NewsCard = ({ article, customStyle, lineClamp = 6 }) => {
    const descriptionStyle = getDescriptionStyle(lineClamp);
    return (
        <Card className={`border-radius-5 ${customStyle}`}>
            <div className="d-flex justify-content-center align-items-center">
                <img className="border-radius-5 img-width-8 mt-4" src={article.urlToImage} />
            </div>

            <Card.Body>
                <Card.Title href={article.url} className="fs-4" style={titleStyle}>{article.title}</Card.Title>
                <p className="fs-6" style={descriptionStyle}>{article.description}</p>
                <Card.Link href={article.url} target="_blank">See More</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default NewsCard;
