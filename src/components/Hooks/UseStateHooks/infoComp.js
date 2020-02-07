import React, { useState } from 'react';

const infoComp = () => {
   
    const [info, setInfo] = useState(
        {
            name: '',
            address: '',
            phone: '',
        }
    );
    return (
        <div>
            <br/>
            <p>
                Name: &ensp;
            <input
                    type="text"
                    name="name"
                    value={info.name}
                    onChange={e => setInfo({ ...info, name: e.target.value })}
                />
            </p>
            <p>
                Address: &ensp;
            <input
                    type="text"
                    name="address"
                    value={info.address}
                    onChange={e => setInfo({ ...info, address: e.target.value })}
                />
            </p>
            <p>
                Phone: &ensp;
            <input
                    type="text"
                    name="phone"
                    value={info.phone}
                    onChange={e => setInfo({ ...info, phone: e.target.value })}
                />
            </p>

            <h4>Name: {info.name}</h4>
            <h4>Address: {info.address}</h4>
            <h4>Phone: {info.phone}</h4>
        </div>
    );
};

export default infoComp;