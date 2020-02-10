import React from 'react';
import CountComp from './counterComp';
import CounterTwo from './counterTwo';
import GlobalCounter from './useReducerWithUseContext/parent';
import FetchDataUsingUseState from './FetchingDataUsingUseState/parent';

const parentComp = () => {
    return (
        <div>
            <CountComp />
            <CounterTwo />
            <GlobalCounter />
            <FetchDataUsingUseState/>
        </div>
    );
};

export default parentComp;