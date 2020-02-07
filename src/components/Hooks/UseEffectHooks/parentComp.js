import React, { Component } from 'react';
import NamedDocTitleWithCountComp from './namedDocTitleWithCount';
import MouseMoveComp from './mouseMoveComp';

export default class ParentComp extends Component {

    render() {
        return (
            <div>
                <NamedDocTitleWithCountComp/>
                <MouseMoveComp/>
            </div>
        );
    }
}
