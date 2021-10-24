import axios from 'axios'

const url = 'http://localhost:5000/users'

export const getUsers = () => axios.get(url);

export const createUser = (user) => axios.post(url, user);

export const updateUser = (id, updatedUser) => axios.patch(`${url}/${id}`, updatedUser)

export const deleteUser = (id) => axios.delete(`${url}/${id}`)