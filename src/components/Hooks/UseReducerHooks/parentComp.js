import React from 'react';
import CountComp from './counterComp';
import CounterTwo from './counterTwo';

const parentComp = () => {
    return (
        <div>
            <CountComp/>
            <CounterTwo/>
        </div>
    );
};

export default parentComp;