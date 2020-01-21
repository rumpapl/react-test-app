import React, { Component } from 'react';
import HeigherOrderComponent from './CountComp';


class HoberCount extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <h3 onMouseOver={incrementCount}>Hovered {count} times</h3>
        );
    }
}

export default HeigherOrderComponent(HoberCount);
