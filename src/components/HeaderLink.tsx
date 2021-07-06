import React from 'react';
import styled from 'styled-components'

import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
    height: 60px;
    cursor: pointer;
    position: relative;
    line-height: 60px;
    text-align: center;
    overflow: hidden;  
    font-size: 18px;
    color: #000912;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 1px solid #c5c5c5;
    border-right: 1px solid #c5c5c5;
    transition: color .5s;
    &:before{
        content: '';
        position: absolute;
        left: 0;
        bottom: -60px;
        width: 100%;
        height: 60px;
        background-color: black;
        transition: bottom .5s;
    }
    &:hover {
        color: white
    }
    &:hover:before{
        bottom: 0;    
    }
`;

type Props = {
    to: string,
    text: string
}

const HeaderLink: React.FC<Props> = (props) => {
    return (
        <StyledLink to={props.to} className='wrapper'>
            <div className="block" style={{position: "relative"}}>{props.text}</div>
        </StyledLink>
    )
}

export default HeaderLink