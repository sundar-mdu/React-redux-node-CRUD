const Users = (users=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;   
        case 'CREATE_USER':
            return [...users, action.payload];  
        default:
            return users;   
    }
}

export default Users