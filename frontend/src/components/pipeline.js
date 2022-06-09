import { React, Component } from "react";
import { Container, Col, Row, Navbar, Nav, Card, Table } from "react-bootstrap";

export default class Pipeline extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Главная</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Вход</Nav.Link>
                  <Nav.Link href="#features">Производство</Nav.Link>
                  <Nav.Link href="#pricing">Статистика</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}
