import React, { Component } from 'react';
import { Header } from '../../Route';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UseStateHooks from './UseStateHooks/parentComp';

export default class ParentComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    renderScreen = () => {
        if (this.state.text === "useStateHooks") {
            return (
                <UseStateHooks />
            )
        }

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <Header />
                </nav>
                <br />
                <Container>
                    <Row>
                        <Col>
                            <Button variant="secondary" onClick={() => { this.setState({ text: "useStateHooks" }) }}>useStateHooks</Button>
                        </Col>
                        <Col>
                            {this.renderScreen()}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
