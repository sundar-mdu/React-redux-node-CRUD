import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import User from "./User/user";

const Users = ({currentId, setCurrentId}) => {

    const users = useSelector(state => state.users)
    console.log(users);

    return (        
        !users.length?
            <Typography>...Loading</Typography>:
        (
            <Grid>
                <Typography>Users List</Typography><br/><br/>
                {users.map((user)=>(
                    <Grid key={user._id}>
                        <User user={user} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>           
        )            
    );
}

export default Users