import React from 'react';
import CountComp from './counterComp';
import CounterTwo from './counterTwo';
import GlobalCounter from './useReducerWithUseContext/parent';

const parentComp = () => {
    return (
        <div>
            <CountComp />
            <CounterTwo />
            <GlobalCounter />
        </div>
    );
};

export default parentComp;