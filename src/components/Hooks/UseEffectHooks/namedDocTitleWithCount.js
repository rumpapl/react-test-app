import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const namedDocTitleWithCount = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('updating components')
        document.title = `Count ${count} times`
    }, [count])

    return (
        <div>
            <p>
                Name:
                &ensp;
                <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
            </p>
            <h3>Count: {count}</h3>
            <p>
                <Button onClick={() => { setCount(prevCount => prevCount + 1) }}>+</Button>
                &ensp;
                <Button onClick={() => { setCount(prevCount => prevCount - 1) }}>-</Button>
                &ensp;
                <Button onClick={() => { setCount(prevCount => prevCount + 5) }}>+5</Button>
                &ensp;
                <Button onClick={() => { setCount(prevCount => prevCount - 5) }}>-5</Button>
            </p>

        </div>
    );
};

export default namedDocTitleWithCount;