import React from 'react';
import { connect } from 'react-redux';

class EditPost extends React.Component {

    handleEdit = (event) => {
        event.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {

            newTitle,
            newMessage
        }
        this.props.dispatch({type:'UPDATE', id: this.props.post.id, data: data})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                    defaultValue={this.props.post.title} placeholder="Enter Post Title"/>

                    <textarea required type="text" rows="5" ref={(input) => this.getMessage = input}
                    defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" />
                
                    <button>Update</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditPost);