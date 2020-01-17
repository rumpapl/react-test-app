import React, { Component } from 'react';
import CompB from './CompB';

class CompA extends Component {
    render() {
        return (
            <div>
                <h1>component A</h1> 
                <CompB />
            </div>
        );
    }
}

export default CompA;