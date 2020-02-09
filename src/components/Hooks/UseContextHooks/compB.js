import React, {useContext} from 'react';
import {UserContext, AddressContext} from './context';

const compB = () => {
    const UserContextValue = useContext(UserContext);
    const AddressContextValue = useContext(AddressContext);

    return (
        <div>
            <h1>{UserContextValue}</h1>
            <h3>{AddressContextValue}</h3>
        </div>
    );
};

export default compB;