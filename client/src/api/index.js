import axios from 'axios'

const url = 'http://localhost:5000/users'

export const getUsers = () => axios.get(url);

export const createUser = (user) => axios.post(url, user);