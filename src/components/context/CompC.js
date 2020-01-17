import React, { Component } from 'react';
import CompD from './CompD';
import { UserConsumer } from './userContext';

class CompC extends Component {
    render() {
        return (
            <div>
            <h1>component C</h1>
            <UserConsumer>
                {
                    (contextValue)=>{
                        return <h3>from component C - {contextValue}</h3>
                    }
                }
            </UserConsumer>
            <CompD />
            </div>
        );
    }
}

export default CompC;