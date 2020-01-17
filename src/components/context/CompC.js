import React, { Component } from 'react';
import CompD from './CompD';
import { UserConsumer } from './userContext';

class CompC extends Component {
    render() {
        return (
            <div>
                <h1>component C</h1>
                <UserConsumer>
                    {
                        (posts) => {
                            return (
                                <div>
                                    {
                                        posts.length ?
                                            <p>from component C - {posts[0].body}</p>
                                            :
                                            <h1>no post yet</h1>
                                    }
                                </div>
                            )
                        }
                    }
                </UserConsumer>
                <CompD />
            </div>
        );
    }
}

export default CompC;