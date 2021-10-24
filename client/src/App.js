import {Container, AppBar, Grow, Grid } from '@material-ui/core'
import React, {useEffect, useState} from 'react';

import Users from './components/Users/users';
import Form from './components/Form/form';

import {useDispatch} from 'react-redux'
import {getUsers} from './actions/users'

function App() {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Container maxwidth="lg">
      <AppBar>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Users setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>          
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
