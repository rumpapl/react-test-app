/* eslint-disable */
import React, {useEffect, useState} from 'react';

const mouseMoveComp = () => {
/* eslint-disable */
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePossition=(e)=>{
        console.log('mouse evevt')
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log('updating component')
        window.addEventListener('mousemove', logMousePossition);
    }, [])
    // Run effects only once using []

    return (
        <div>
            <p>X: {x}, Y: {y}</p>
        </div>
    );
};

export default mouseMoveComp;