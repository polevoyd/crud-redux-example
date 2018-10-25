import React from 'react';
import {connect} from 'react-redux';

class PostForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message
        }
        console.log(data)
    }

    render() {
        return (
            <div>
                <h1> Create Post </h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" />
                    <textarea required rows="5" ref={(input)=> this.getMessage = input} cols="28" placeholder="Enter Post" />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

// connect() returns a function which takes in your current component 
// as an argument and returns a new component with dispatch method as it’s prop. 

export default connect()(PostForm);

// export default PostForm;