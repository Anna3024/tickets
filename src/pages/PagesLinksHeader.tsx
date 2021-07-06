import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import HeaderLink from '../components/HeaderLink'

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

const StyledLogo = styled(NavLink)`
  display: inline-block;
  width: 112px;
  height: 33px;
  text-align: center;
  margin-top: 10px;
  color: black;
  font-size: 30px;
  font-family: 'Tourney', cursive;
  color: black;
  background: linear-gradient(to right, #0072ce, #0072ce 50%, black 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none; 
  &:hover {
    background-position: 0 100%;
  }
`;
const FlexedHeaderLinks = styled.div`
  display: flex;
  align-items: center;
`;
const FlexedContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PagesLinksHeader: React.FC = () => {
  const classes = useStyles();
    return (
      <header>
        <FlexedContainer className='contentContainer'>
          <StyledLogo to="/" exact className="logo">F-MAX</StyledLogo>

          
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
            <HeaderLink to="/logIn" text='Личный кабинет'/>

          </FlexedHeaderLinks>
        </FlexedContainer>
      </header>
    );

}
    
export default PagesLinksHeader;
    