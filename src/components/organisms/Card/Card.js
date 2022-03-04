import { Card, Col } from "react-bootstrap";
import React from "react";

const CardComponent = (incomeData) => {
  const { title, amount, date, created_at } = incomeData;
  return (
    <Col className="col-10 col-md-4 mt-2">
      <Card style={{ width: "18rem" }} className="text-center">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{amount}</Card.Text>
          <Card.Text>{date}</Card.Text>
          <Card.Text>{created_at}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardComponent;
