import React, { Component } from 'react';
import { Header } from '../../Route';
import { Container } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Header />
        </nav>
        <Container>
          <h1>Welcome react test project</h1>
        </Container>
        
      </div>
    );
  }
}

export default Home;
