import { Container } from "react-bootstrap";
import "./App.css";

import Header from "./Components/Header";
import ChatBox from "./Components/ChatBox";
import Home from "./pages/Home";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Container fluid="lg">
        <Header />
        {!user ? <Home /> : <ChatBox />}
      </Container>
    </>
  );
}

export default App;
