import React, { useReducer, useEffect } from 'react';
import PostAPI from '../../../../APICalls/Post';

const initialState = {
    post: {},
    error: '',
    loading: true,
};

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'successfull':
            return {
                post: action.payload,
                error: '',
                loading: false,
            }
        case 'failed':
            return {
                post: action.payload,
                error: 'Something went wrong!',
                loading: false,
            }
        default:
            return currentState;
    }
}

const parent = () => {

    const [newState, dispatch] = useReducer(reducer, initialState);

    const fetchSinglePost = async () => {
        try {
            const response = await PostAPI.getSinglePosts("1");
            console.log(response.status, response);
            if (response.status === 200) {
                dispatch({ type: 'successfull', payload: response.data });
            }
            else {
                console.log(response.statusText);
                alert(response.statusText);
            }
        }
        catch (err) {
            dispatch({ type: 'failed', payload: {} });
        }
    }

    useEffect(() => {
        fetchSinglePost()
    }, []
    )
    return (
        <div>
            <h1>Fetching data using useReducer hooks</h1>
            {newState.loding ? 'Loding' : newState.post.title}
            {newState.error ? newState.error : null}
        </div>
    );
};

export default parent;