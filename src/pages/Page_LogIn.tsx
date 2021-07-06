import React from 'react';
import styled from 'styled-components';

import LogSignField from '../components/LogSignField'

const FlexedFields = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 200px;
`;

const Page_LogIn :React.FC = () => {

  return (
    <FlexedFields className='contentContainer'>
      <LogSignField mode = "LogIn"/> 
      <LogSignField mode = "SignUp"/> 
    </FlexedFields>
  )

}
    
export default Page_LogIn;