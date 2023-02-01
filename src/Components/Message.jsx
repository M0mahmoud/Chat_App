import React from "react";
import { Card } from "react-bootstrap";

import { auth } from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  return (
    <Card className={`w-75 mb-3 ${message.uid === user.uid ? "ms-auto" : ""}`}>
      <Card.Header className="text-primary fw-bold">User...</Card.Header>
      <Card.Body>
        <blockquote className="mb-0">
          <p className="fs-5">{message.text}</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Message;
