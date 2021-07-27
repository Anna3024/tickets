import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AppStateType } from '../redux/rootReducer';

import { makeStyles } from '@material-ui/core/styles';
import {InputBase, IconButton, Paper, Container} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import HeaderLink from '../components/HeaderLink'
import Logo from '../components/Logo'

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '20px',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 450,
    height: '40px',
    opacity:0.7,
    borderRadius: '20px'
  },
  input: {
    marginLeft: theme.spacing(1),
    padding: '4px',
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const FlexedHeaderLinks = styled.div`
  display: flex;
  align-items: center;
`;
const FlexedContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PagesLinksHeader: React.FC<any> = ({userData}) => {

  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <FlexedContainer >
        <Logo color="black"/>
        <FlexedHeaderLinks>

          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Поиск"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <HeaderLink to="/movies" text='Фильмы' />
          <HeaderLink to="/cinemas" text='Кинотеатры'/>
          <HeaderLink to="/about" text='О нас'/>
          <HeaderLink to={userData?"/cabinet":"/logIn"} text='Личный кабинет'/>

        </FlexedHeaderLinks>
      </FlexedContainer>
    </Container>
  );

}

const mapStatetoProps  = (state:AppStateType) => {
  return {
    userData: state.user.userObj
  }
}
    
export default connect(mapStatetoProps, null)(PagesLinksHeader);
    