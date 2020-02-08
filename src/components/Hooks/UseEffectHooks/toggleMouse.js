import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import MouseMoveComp from './mouseMoveComp';


const toggleMouse = () => {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <Button variant="outline-secondary" onClick={()=> setDisplay(!display)}>Toggle Mouse Position</Button>
            {display && <MouseMoveComp/>}
        </div>
    );
};

export default toggleMouse;