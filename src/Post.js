import React from 'react';
import { connect } from 'react-redux';

class Post extends React.Component {
    render() {
        return(<div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>
        <button>Edit</button>
        <button>Delete</button>
    </div>);
    }
    
}

export default connect()(Post);