import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

import Carousel from '../components/Carousel';
import CardsList from '../components/CardsList';
import CinemasMap from '../components/CinemasMap';


const Page_Main: React.FC = () => {

  return (
    <div className="page_main">
      <Carousel/>
      <div className="contentContainer">
        <h2>Кино</h2>
        <CardsList/>

        <h2>Кинотеатры</h2>
        <CinemasMap/>

      </div>
    
    </div>
  )
}
    
export default Page_Main;