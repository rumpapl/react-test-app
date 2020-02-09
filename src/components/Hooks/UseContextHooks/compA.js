import React from 'react';
import {UserContext, AddressContext} from './context';
import CompB from './compB';

const compA = () => {
    return (
        <div>
            <UserContext.Provider value='Rumpa'>
                <AddressContext.Provider value="Bangladesh">
                    <CompB/>
                </AddressContext.Provider>
            </UserContext.Provider>
            
        </div>
    );
};

export default compA;