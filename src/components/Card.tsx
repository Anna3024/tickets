import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    min-width: 240px;
    min-height: 480px;
    border: 1px solid black;
    padding: 10px;
    background-size: cover;
    background-position: center;
`
type Props = {
    id: string,
    title: string,
    image: string
}

const Card:React.FC<Props> = (props) => {
        
    return (
        <StyledCard style={{backgroundImage: `url(${props.image})`}}>
            {props.title}
        </StyledCard>
    )
}

export default Card