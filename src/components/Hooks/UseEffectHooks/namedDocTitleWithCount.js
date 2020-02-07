import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const namedDocTitleWithCount = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `Count ${count} times`
    })

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

export default namedDocTitleWithCount;