import React, { Component } from 'react';
import {UserProvider} from './userContext';
import CompA from './CompA';

class ParentComp extends Component {
  render() {
    return (
//    <UserProvider value={"Context-Value"}>
       <CompA />
//    </UserProvider>
    );
  }
}

export default ParentComp;