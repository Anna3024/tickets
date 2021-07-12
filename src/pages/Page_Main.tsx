import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

import {Container} from '@material-ui/core';

import CarouselComponent from '../components/CarouselComponent';
import CardsList from '../components/CardsList';
import CinemasMap from '../components/CinemasMap';


const Page_Main: React.FC = () => {

  return (
    <div className="page_main">
      <CarouselComponent/>
      <Container maxWidth="xl">
        <h2>Кино</h2>
        <CardsList/>

        <h2>Кинотеатры</h2>
        <CinemasMap/>

      </Container>
    
    </div>
  )
}
    
export default Page_Main;