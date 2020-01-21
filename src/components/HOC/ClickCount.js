import React, { Component } from 'react';
import HeigherOrderComponent from './CountComp';

class ClickCount extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <button onClick={incrementCount}>Clicked {count} times</button>
        );
    }
}

export default HeigherOrderComponent(ClickCount);
