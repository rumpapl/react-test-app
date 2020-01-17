import React, { Component } from 'react';
import {UserProvider} from './userContext';
import CompA from './CompA';
import PostAPI from '../../APICalls/Post';

class ParentComp extends Component {

    constructor() {
        super();
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        this.fetchAllPost();
    }

    fetchAllPost = async () => {
        try {
            const response = await PostAPI.getPosts();
            console.log(response.status, response);
            if (response.status === 200) {
                this.setState({
                    posts: response.data,
                });
            }
            else {
                console.log(response.statusText);
                alert(response.statusText);
            }
        }
        catch (err) {
            console.log(err);
            alert('Something went wrong !!');
        }
    }

    render() {
        return (
            <UserProvider value={this.state.posts}>
                <CompA />
            </UserProvider>
        );
    }
}

export default ParentComp;