import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Assets/pfl.png";
import "./App.css";

function ColorSchemesExample() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ position: "fixed", top: "0", width: "100%" }}
      >
        <Container>
          <img src={logo} style={{ width: "100px" }} alt="Logo" />
          <Nav>
            <Nav.Link href="/">Points Table</Nav.Link>
            <Nav.Link href="createClub">Create Club</Nav.Link>
            <Nav.Link href="addMatch">Add Match</Nav.Link>
            <Nav.Link href="matches">Matches</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
