import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

class AllPost extends React.Component {

    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
            </div>
        );
    }
}

const mapToStateProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapToStateProps)(AllPost);