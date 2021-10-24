import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import React, {useEffect} from 'react';

import Users from './components/Users/users';
import Form from './components/Form/form';

import {useDispatch} from 'react-redux'
import {getUsers} from './actions/users'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Container maxwidth="lg">
      <AppBar>
        {/* <Typography align="center">Users</Typography> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid container alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Users />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>          
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
