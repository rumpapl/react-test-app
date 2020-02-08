import React, { Component } from 'react';
import NamedDocTitleWithCountComp from './namedDocTitleWithCount';
// import MouseMoveComp from './mouseMoveComp';
import ToggleMouseComp from './toggleMouse';
import AutoCounter from './autoCounter';

export default class ParentComp extends Component {

    render() {
        return (
            <div>
                <NamedDocTitleWithCountComp/>
                <ToggleMouseComp/>
                <AutoCounter/>
            </div>
        );
    }
}
