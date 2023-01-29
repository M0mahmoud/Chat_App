import React from "react";
import { Card } from "react-bootstrap";

const Message = ({ message }) => {
  return (
    <Card className="w-75 mb-3">
      <Card.Header className="text-primary fw-bold">{message.name}</Card.Header>
      <Card.Body>
        <blockquote className="mb-0">
          <p className="fs-5">{message.text}</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Message;
