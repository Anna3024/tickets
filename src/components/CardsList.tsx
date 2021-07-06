import React from 'react';
import styled from 'styled-components';

// import { NavLink } from 'react-router-dom';

import Card from './Card'

// import './CardsList.scss';

const FlexedDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const CardsList:React.FC = () => {

    return (
        <FlexedDiv>
            {[<Card key={1}/>,<Card key={2}/>, <Card key={3}/>, <Card key={4}/>, <Card key={5}/>]}
        </FlexedDiv>
    )

}

export default CardsList