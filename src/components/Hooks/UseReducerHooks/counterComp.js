import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

const initialState = {
    counterOne: 0,
    counterTwo: 20,
};
const reducerFunction = (currentState, action) => {
    switch (action.type) {
        case 'Counter One +':
            return { ...currentState, counterOne: currentState.counterOne + action.value };
        case 'Counter One -':
            return { ...currentState, counterOne: currentState.counterOne - action.value };
        case 'Counter Two +':
            return { ...currentState, counterTwo: currentState.counterTwo + action.value };
        case 'Counter Two -':
            return { ...currentState, counterTwo: currentState.counterTwo - action.value };
        case 'reset':
            return initialState;
        default:
            return currentState;
    }
}

const counterComp = () => {

    const [newState, dispatch] = useReducer(reducerFunction, initialState);

    return (
        <div>
            <h2>Counter 1: {newState.counterOne}</h2>
            <Button onClick={() => dispatch({ type: 'Counter One +', value: 1 })}>+</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: 'Counter One -', value: 1 })}>-</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: 'Counter One +', value: 5 })}>+5</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: 'Counter One -', value: 5 })}>-5</Button>

            <h2>Counter 2: {newState.counterTwo}</h2>
            <Button onClick={() => dispatch({ type: 'Counter Two +', value: 1 })}>+</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: 'Counter Two -', value: 1 })}>-</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: 'Counter Two +', value: 5 })}>+5</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: 'Counter Two -', value: 5 })}>-5</Button>
            <br />
            <br />
            <Button onClick={() => dispatch({ type: "reset" })}>Reset Both Counter</Button>

        </div>
    );
};

export default counterComp;