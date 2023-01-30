import React, { useState } from "react";
import { Button, InputGroup, Form, Alert } from "react-bootstrap";

import { auth, db } from "../services/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const FormMsg = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      <Alert variant="danger">Enter valid message</Alert>;
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      createdAt: serverTimestamp(),
      uid,
    });

    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className=" position-fixed start-0 bottom-0 p-3 w-100">
      <form onSubmit={(event) => sendMessage(event)}>
        <InputGroup className="mt-3">
          <Form.Control
            placeholder="Enter Message..."
            aria-label="send message"
            aria-describedby="basic-addon2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" variant="outline-primary" id="button-addon2">
            Send
          </Button>
        </InputGroup>
      </form>
    </main>
  );
};

export default FormMsg;
