import React, { Component } from 'react';
import NamedDocTitleWithCountComp from './namedDocTitleWithCount';

export default class ParentComp extends Component {

    render() {
        return (
            <div>
                <NamedDocTitleWithCountComp/>
            </div>
        );
    }
}
