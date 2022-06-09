import logo from "./logo.svg";
import "./App.css";
import Pipeline from "./components/pipeline";
import PipelineItem from "./components/pipelineitem";
import Signin from "./components/signin";
import Signup from "./components/signup";
import { Container, Col, Row, Navbar, Nav, Card, Table } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Pipeline />
      <PipelineItem />
      <center>
        <Container>
          <Row>
            <Col xs={4}></Col>
            <Col>
              {/* <Signin /> */}
              <Signup />
            </Col>
          </Row>
        </Container>
      </center>
    </div>
  );
}

export default App;
