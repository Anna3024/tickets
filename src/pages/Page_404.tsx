import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

import {Container, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import bg from '../img/image/404-bg.jpg'

const StyledPage = styled.div`
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  height: ${window.innerHeight - 70}px
`;

const StyledContainer = styled(Container)`
  padding-top: 45vh;
`;

const Styledh2 = styled.h2`
  color: white;
  margin-bottom: 20px
`;

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "white",
    borderColor: "white",
    borderRadius: 0
  }
}));

const Page_404: React.FC = () => {

  const history = useHistory()
  const classes = useStyles();

  return (
    <StyledPage>
      <StyledContainer maxWidth="xl">
        <Styledh2>Не найдена страница твоя</Styledh2>
        
        <Button 
            variant="outlined" 
            className={classes.btn}
            size="large"
            onClick={()=>{history.push('/')}}>
            ПЕРЕЙТИ НА ГЛАВНУЮ
        </Button>
      </StyledContainer>
    </StyledPage>
  )

}
    
export default Page_404;