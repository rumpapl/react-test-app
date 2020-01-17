import React, { Component } from 'react';
import {UserConsumer} from './userContext';

class CompD extends Component {
    render() {
        return (
            <div>
            <h1>component D</h1>
            <UserConsumer>
                {
                    (contextValue)=>{
                        return <h3>from component C - {contextValue}</h3>
                    }
                }
            </UserConsumer>
            </div>
        );
    }
}

export default CompD;