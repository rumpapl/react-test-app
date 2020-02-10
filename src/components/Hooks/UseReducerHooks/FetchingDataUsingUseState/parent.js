import React, { useState, useEffect } from 'react';
import PostAPI from '../../../../APICalls/Post';

const parent = () => {
    const [post, setPost] = useState({});
    const [error, setError] = useState('');
    const [loding, setLoding] = useState(true);

    const fetchSinglePost = async () => {
        try {
            const response = await PostAPI.getSinglePosts("1");
            console.log(response.status, response);
            if (response.status === 200) {
                setPost(response.data);
                setError('');
                setLoding(false)
            }
            else {
                console.log(response.statusText);
                alert(response.statusText);
            }
        }
        catch (err) {
            setPost({});
            setError('Something went wrong!');
            setLoding(false);
        }
    }

    useEffect(() => {
        fetchSinglePost()
    }, []
    )
    return (
        <div>
            <h1>Fetching data using useState hooks</h1>
            {loding ? 'Loding' : post.title}
            {error ? error : null}
        </div>
    );
};

export default parent;