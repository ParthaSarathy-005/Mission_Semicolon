import React from "react";
import { Badge, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ProductPreview({ _id, category, name, pictures }) {
    return (
        <LinkContainer to={`/product/${_id}`} style={{ cursor: "pointer", width: "13rem", margin: "10px" }}>
            <Card style={{ width: "20rem", margin: "10px" }}>
                <Card.Img variant="top" className="product-preview-img" src={pictures[0]} style={{ height: "150px" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Badge bg="warning" text="dark">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Badge>
                </Card.Body>
            </Card>
        </LinkContainer>
    );
}

export default ProductPreview;
