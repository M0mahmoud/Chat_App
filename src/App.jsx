import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

import Header from "./Components/Header";

function App() {
  return (
    <>
      <Container fluid="lg">
        <Header />
        <Outlet />
      </Container>
    </>
  );
}

export default App;
