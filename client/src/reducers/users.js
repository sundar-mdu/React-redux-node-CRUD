const Users = (users=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;   
        case 'CREATE_USER':
            return [...users, action.payload];  
        case 'UPDATE_USER':
            return users.map((user)=>action.payload._id===user._id?action.payload:user);  
        case 'DELETE_USER':
            return users.filter((user)=>action.payload!==user._id);  
        default:
            return users;   
    }
}

export default Users