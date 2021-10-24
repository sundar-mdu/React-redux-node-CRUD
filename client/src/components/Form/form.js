import { Typography, TextField } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import { useSelector } from "react-redux";
import {createUser, updateUser} from '../../actions/users'

const Form = ({currentId, setCurrentId}) => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email:'',
        age:''
    })
    const user = useSelector((state) => currentId ? state.users.find((u)=>u._id===currentId) : null)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId){
            dispatch(updateUser(currentId, userData))
        }else{
            dispatch(createUser(userData))
        }

        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setUserData({
            firstName: '',
            lastName: '',
            email:'',
            age:''
        })
    }

    useEffect(() => {
        if(user){
            setUserData(user)
        }
    }, [user])

    return (
        <>
            <form
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit}
            >
                <Typography>{currentId?'Edit':'Create'} User</Typography>
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
                <button type="submit">{currentId?'Update':'Submit'}</button><br/><br/>
                <button type="button" onClick={clear}>Clear</button>
            </form>
        </>
    )
}

export default Form