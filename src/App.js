import React from 'react';

// Component to create a new post
import PostForm from './PostForm';
// Component to show all posts
import AllPost from './AllPost';


class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1>Hello React!</h1>
                <PostForm />
                <AllPost />
            </div>
        );
    }
}

export default App;