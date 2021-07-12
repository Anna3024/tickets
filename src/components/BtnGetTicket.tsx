import React from 'react';
import styled from 'styled-components'

const StyledBtn = styled.button`
    background: linear-gradient(to top,#d5d5d5 0,#d5d5d5 50%,#0072ce 50%,#0072ce 100%) #d5d5d5;
    background-size: 100% 200%;
    transition: background-position .3s linear 0s,color .3s linear 0s;
    color: #fff;
    padding: 14px;
    border: none;
    float: left;
    transition: background-position .3s linear 0s,color .3s linear 0s;
    &:hover {
        color: #000912;
        background-position: 0 100%;
    }
`;

const BtnGetTicket: React.FC = () => {
    return (
        <StyledBtn>
            КУПИТЬ БИЛЕТ
        </StyledBtn>
    )
}

export default BtnGetTicket