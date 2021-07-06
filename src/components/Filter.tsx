import React from 'react';
import styled from 'styled-components';

// import { NavLink } from 'react-router-dom';

const FlexedUl = styled.ul`
    display: flex;
    width: 100%;
`
const StyledLi = styled.li`
    width: 33%;
    border: 1px solid gray
`

const Filter: React.FC = () => {
        
    return (
        <FlexedUl className="filter">
            <StyledLi>Cinema-filter</StyledLi>
            <StyledLi>Date-filter</StyledLi>
            <StyledLi>Time-filter</StyledLi>
        </FlexedUl>
    )
    
}

export default Filter