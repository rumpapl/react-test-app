import React, { Component } from 'react';
import { Header } from '../../Route';
import { Container } from 'react-bootstrap';
import ClickCount from './ClickCount';
import HoverCount from './HoberCount';

class ParentComp extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Header />
        </nav>
        <Container>
          <h1>HOC</h1>
          <ClickCount />
          <HoverCount />
        </Container>
      </div>
    );
  }
}

export default ParentComp;
