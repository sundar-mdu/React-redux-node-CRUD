import * as api from '../api';

export const getUsers = () => async (dispatch) => {
    try {
        const {data} = await api.getUsers();
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const createUser = (user) => async (dispatch) => {
    try {
        const {data} = await api.createUser(user);
        dispatch({ type: 'CREATE_USER', payload: data})
    } catch (error) {
        console.log(error);
    }
}