import React from 'react';
import styled from 'styled-components';

// import { NavLink } from 'react-router-dom';

const StyledCard = styled.div`
    width: 240px;
    height: 360px;
    background-color: bisque;
    border-radius: 22px;
    margin: 10px;
    padding: 10px;
`

const Card:React.FC = () => {
        
    return (
        <StyledCard >
            Card
        </StyledCard>
    )
}

export default Card