import React from 'react';
import styled from 'styled-components'
import { useHistory , Redirect} from 'react-router-dom';

import {Container, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAuth } from "../context/AuthContext"

const StyledBtn = styled(Button)`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 75px
`;
const useStyles = makeStyles((theme) => ({
  btn: {
    color: "black",
    borderColor: "black",
    borderRadius: 0
  }
}));

const Page_Cabinet: React.FC = () => {  

  const classes = useStyles();
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  console.log(JSON.parse(JSON.stringify(currentUser)))

  const logOutHandler = async () => {
    try {
      await logout()
      history.push('/logIn')

    } catch (error) {
      console.log('Ошибка при выходе из аккаунта')
    }
   
  }

  if (!currentUser) {
    return <Redirect to='/'/>
  }

  return (
    <Container maxWidth="xl">
      Привет, ID:  {currentUser.uid}
      <br/>
      email: {currentUser.email}
      <StyledBtn 
          variant="outlined" 
          className={classes.btn}
          size="large"
          onClick={logOutHandler}
          disabled={false}>
          ВЫЙТИ
      </StyledBtn>
    </Container>
  )

}
export default Page_Cabinet;