import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {Container} from '@material-ui/core';


const StyledFooter = styled.div`
  background-color: #000912;
  height: 200px;
  color: white;
`;

const PagesLinksFooter: React.FC = () => {
    return (
      <StyledFooter>
        <Container maxWidth="xl">
        
        footer 
        </Container> 
      </StyledFooter> 
    );

}
    
export default PagesLinksFooter;
    