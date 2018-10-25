import React from 'react';

class PostForm extends React.Component {
    render() {
        return (
            <div>
                <h1> Create Post </h1>
                <form>
                    <input required type="text" placeholder="Enter Post Title" />
                    <textarea required rows="5" cols="28" placeholder="Enter Post" />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default PostForm;