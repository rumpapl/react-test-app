import React, {useContext} from 'react';
import { CountContext } from './parent';
import { Button } from 'react-bootstrap';

const compF = () => {
    const counterContext = useContext(CountContext);
    return (
        <div>
            <h4>ComponentF: {counterContext.count}</h4>
            <Button onClick={() => counterContext.dispatch({ type: '+', value: 1 })}>+</Button>
            &ensp;
            <Button onClick={() => counterContext.dispatch({ type: '-', value: 1 })}>-</Button>
            &ensp;
            <Button onClick={() => counterContext.dispatch({ type: '+', value: 5 })}>+5</Button>
            &ensp;
            <Button onClick={() => counterContext.dispatch({ type: '-', value: 5 })}>-5</Button>
            &ensp;
            <Button onClick={() => counterContext.dispatch({ type: "reset" })}>Reset</Button>
        </div>
    );
};

export default compF;