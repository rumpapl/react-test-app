import React, { Component } from 'react';
import {UserConsumer} from './userContext';

class CompD extends Component {
    render() {
        return (
            <div>
            <h1>component D</h1>
            <UserConsumer>
                {
                    (posts)=>{
                        return (
                            <div>
                                {
                                    posts.length ?
                                        <p>from component D - {posts[1].body}</p>
                                        :
                                        <h1>no post yet</h1>
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
            </div>
        );
    }
}

export default CompD;