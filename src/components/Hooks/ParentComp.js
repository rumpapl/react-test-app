import React, { Component } from 'react';
import { Header } from '../../Route';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UseStateHooks from './UseStateHooks/parentComp';
import UseEffectHooks from './UseEffectHooks/parentComp';
import UseContextHooks from './UseContextHooks/parentComp';
import UseReducerHooks from './UseReducerHooks/parentComp';

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
        else if (this.state.text === "useEffectHooks") {
            return (
                <UseEffectHooks />
            )
        }
        else if (this.state.text === "useContextHooks") {
            return (
                <UseContextHooks />
            )
        }
        else if (this.state.text === "useReducerHooks") {
            return (
                <UseReducerHooks />
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
                            <br/>
                            <br/>
                            <Button variant="secondary" onClick={() => { this.setState({ text: "useEffectHooks" }) }}>useEffectHooks</Button>
                            <br/>
                            <br/>
                            <Button variant="secondary" onClick={() => { this.setState({ text: "useContextHooks" }) }}>useContextHooks</Button>
                            <br/>
                            <br/>
                            <Button variant="secondary" onClick={() => { this.setState({ text: "useReducerHooks" }) }}>useReducerHooks</Button>
                        
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
