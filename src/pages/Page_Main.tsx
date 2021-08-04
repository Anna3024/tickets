import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

import {Container, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CarouselComponent from '../components/CarouselComponent';
import CardsList from '../components/CardsList';
import CinemasMap from '../components/CinemasMap';

const useStyles = makeStyles((theme) => ({
  texth4: {
    backgroundColor:'#efefef',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2)
  },
}));


const Page_Main: React.FC = () => {
  const classes = useStyles();

  return (
    <div className="page_main">
      <CarouselComponent/>
      <Container maxWidth="xl">
      <Typography variant="h4" align='center' className={classes.texth4}>
        ФИЛЬМЫ
      </Typography>
      <CardsList/>

      <h2>Кинотеатры</h2>
      <CinemasMap/>

      </Container>
    
    </div>
  )
}
    
export default Page_Main;