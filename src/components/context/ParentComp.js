import React, { Component } from 'react';
import { UserProvider } from './userContext';
import CompA from './CompA';
import PostAPI from '../../APICalls/Post';
import { Header } from '../../Route';
import { Container } from 'react-bootstrap';

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
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <Header />
                </nav>
                <Container>
                    <UserProvider value={this.state.posts}>
                        <CompA />
                    </UserProvider>
                </Container>

            </div>

        );
    }
}

export default ParentComp;