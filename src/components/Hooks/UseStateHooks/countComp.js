import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const countComp = () => {

    const [count, setCount] = useState(0);

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