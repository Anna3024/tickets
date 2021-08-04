import React from 'react';
import styled from 'styled-components'

const StyledBtn = styled.button`
    background: linear-gradient(to top,#efefef 0,#efefef 50%,#0072ce 50%,#0072ce 100%) #efefef;
    background-size: 100% 200%;
    transition: background-position .3s linear 0s,color .3s linear 0s;
    color: #fff;
    padding: 14px;
    border: none;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 55px;
    border: 1px solid transparent;
    transition: background-position .3s linear 0s,color .3s linear 0s, border .3s linear 0s;
    &:hover {
        color: #000912;
        background-position: 0 100%;
        border: 1px solid black
    }
    &[disabled] {
        color: gray;
        background-position: 0 100%;
        border: 1px solid gray
    }
`;

type PropsType = {
    text: string | any,
    cbHendler?: ()=>void,
    disabled?: boolean
}

const BtnMain: React.FC<PropsType> = (props) => {
    return (
        <StyledBtn 
            disabled = {props.disabled}
            onClick={props.cbHendler}>
            {props.text}
        </StyledBtn>
    )
}

export default BtnMain