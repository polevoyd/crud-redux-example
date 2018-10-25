import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import EditPost from './EditPost';


class AllPost extends React.Component {

    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditPost post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))}
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