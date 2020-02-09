import React, { Component } from 'react';
import CompA from './compA';
class parentComp extends Component {

  render() {
    return (
      <div>
        <CompA/>
      </div>
    );
  }
}

export default parentComp;
