import React, { Component } from 'react';
import CountComp from './countComp';
import InfoComp from './infoComp';


export default class ParentComp extends Component {
    render() {
        return (
            <div>
                {/* <h1>Use-State Hooks Example </h1> */}
                <CountComp value={10} />
                <InfoComp />
            </div>
        );
    }
}
