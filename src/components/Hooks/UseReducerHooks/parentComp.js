import React from 'react';
import CountComp from './counterComp';
import CounterTwo from './counterTwo';
import GlobalCounter from './useReducerWithUseContext/parent';
import FetchDataUsingUseState from './FetchingDataUsingUseState/parent';
import FetchDataUsingUseReducer from './FetchingDataWithUseReducer/parent';

const parentComp = () => {
    return (
        <div style={{marginBottom: 200}}>
            <CountComp />
            <CounterTwo />
            <GlobalCounter />
            <FetchDataUsingUseState/>
            <FetchDataUsingUseReducer/>
            
        </div>
    );
};

export default parentComp;