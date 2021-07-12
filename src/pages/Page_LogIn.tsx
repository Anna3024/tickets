import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {Container} from '@material-ui/core';

import LogSignField from '../components/LogSignField'

const FlexedFields = styled(Container)`
  display: flex;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 200px;
`;

const Page_LogIn :React.FC = () => {

  return (
    <FlexedFields maxWidth="xl">
      <LogSignField mode = "LogIn"/> 
      <LogSignField mode = "SignUp"/> 
    </FlexedFields>
  )

}
    
export default Page_LogIn;