import { Typography, TextField } from "@material-ui/core";
import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {createUser} from '../../actions/users'

const Form = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email:'',
        age:''
    })
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createUser(userData))
    }

    const clear = () => {
        
    }

    return (
        <>
            <form
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit}
            >
                <Typography>Create User</Typography>
                <TextField
                    name="firstName"
                    variant="outlined"
                    label="First Name"
                    value={userData.firstName}
                    onChange={(e)=>{setUserData({...userData, firstName: e.target.value})}}
                /><br/><br/>
                <TextField
                    name="lastName"
                    variant="outlined"
                    label="Last Name"
                    value={userData.lastName}
                    onChange={(e)=>{setUserData({...userData, lastName: e.target.value})}}
                /><br/><br/>
                <TextField
                    name="email"
                    variant="outlined"
                    label="example@mail.com"
                    value={userData.email}
                    onChange={(e)=>{setUserData({...userData, email: e.target.value})}}
                /><br/><br/>
                <TextField
                    name="age"
                    variant="outlined"
                    label="Age"
                    value={userData.age}
                    onChange={(e)=>{setUserData({...userData, age: e.target.value})}}
                /><br/><br/>
                <button type="submit">Submit</button><br/><br/>
                <button type="button" onClick={clear}>Clear</button>
            </form>
        </>
    )
}

export default Form