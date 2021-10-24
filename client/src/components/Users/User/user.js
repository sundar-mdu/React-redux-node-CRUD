import React from "react";
import {useDispatch} from 'react-redux'
import {deleteUser} from '../../../actions/users'

const User = ({user, setCurrentId}) => {

    const dispatch = useDispatch()

    return (
        <div style={{"padding":"20px"}}>
            <div><label>Name: </label>{user.firstName} {user.lastName}</div>
            <div><label>Email: </label>{user.email}</div>
            <div><label>Age: </label>{user.age}</div>
            <div>
                <button 
                    style={{"background":"blue","marginRight":"10px"}}
                    onClick={()=>setCurrentId(user._id)}
                >
                    Edit
                </button>
                <button 
                    style={{"background":"red"}}
                    onClick={()=>dispatch(deleteUser(user._id))}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default User