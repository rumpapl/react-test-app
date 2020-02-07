import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const countComp = (props) => {

    const [count, setCount] = useState(props.value);

    return (
        <div>
            <h3>Count: {count}</h3>
            &ensp;
            <Button onClick={() => { setCount( prevCount=>prevCount + 1) }}>+</Button>
            &ensp;
            <Button onClick={() => { setCount(prevCount=>prevCount - 1) }}>-</Button>
            &ensp;
            <Button onClick={() => { setCount(prevCount=>prevCount + 5) }}>+5</Button>
            &ensp;
            <Button onClick={() => { setCount(prevCount=>prevCount - 5) }}>-5</Button>
        </div>
    );
};

export default countComp;