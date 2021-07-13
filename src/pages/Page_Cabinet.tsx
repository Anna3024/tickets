import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { compose } from 'redux';

import {Container, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AppStateType } from '../redux/rootReducer';
import { userLogout } from '../redux/actions';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


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

const Page_Cabinet: React.FC<any> = ({userData}) => { 

  const classes = useStyles();
  const history = useHistory()
  const dispatch = useDispatch() 

  const logOutHandler = async () => {
    try {
      dispatch(userLogout())
      history.push('/logIn')

    } catch (error) {
      console.log('Ошибка при выходе из аккаунта')
    }
  }
  
  return (
    <Container maxWidth="xl">
      Привет, ID:  {userData.uid}
      <br/>
      email: {userData.email}
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

const mapStatetoProps  = (state:AppStateType) => {
  return {
    userData: state.user.userObj
  }
}

// export default compose(
//   connect(mapStatetoProps, null),
//   withAuthRedirect
// )(Page_Cabinet)

let AuthRedirectComponent = withAuthRedirect(Page_Cabinet)
    
export default connect(mapStatetoProps, null)(AuthRedirectComponent);