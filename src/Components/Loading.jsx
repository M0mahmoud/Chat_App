import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
