import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

import {Container} from '@material-ui/core';

import Filter from '../components/Filter';
import CardsList from '../components/CardsList';

const Page_MoviesAll: React.FC = () => {
          
  return (
    <div className="page_moviesAll">
      Movies
      <Container maxWidth="xl">
        <Filter/>
        <CardsList/>
      </Container>
    </div>
  )


}
    
export default Page_MoviesAll;