const postReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);

        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id);

        case 'EDIT_POST':
            return state.map((post) => post.id === action.id ? {...post,editing:!post.editing}: post)
        default:
            return state;
    }
}

export default postReducer;