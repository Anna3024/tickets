import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

import Filter from '../components/Filter';
import CardsList from '../components/CardsList';

const Page_MoviesAll: React.FC = () => {
          
  return (
    <div className="page_moviesAll">
      Movies
      <div className='contentContainer'>
          <Filter/>
          <CardsList/>
        </div>
    </div>
  )


}
    
export default Page_MoviesAll;