import { React, Component } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

export default class Signup extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }
    render() {
      return <Container>
      <Row>
        <Col xs={5}>
        <h1>Вход</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>ФИО</Form.Label>
              <Form.Control type="email" placeholder="Введите почту" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Адрес почты</Form.Label>
              <Form.Control type="email" placeholder="Введите почту" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Повторите пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Button>Вход</Button>
          </Form>
        </Col>
      </Row>
    </Container>;
    }
  }