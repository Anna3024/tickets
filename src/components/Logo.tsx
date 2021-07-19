import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type PropsType = {
    color: string
}


const Logo: React.FC<PropsType> = (props) => {
    
    const StyledLogo = styled(NavLink)`
        display: inline-block;
        width: 112px;
        height: 33px;
        text-align: center;
        margin-top: 10px;
        color: black;
        font-size: 30px;
        font-family: 'Tourney', cursive;
        color: ${props.color};
        background: linear-gradient(to right, #0072ce, #0072ce 50%, ${props.color} 50%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 100%;
        background-position: 100%;
        transition: background-position 275ms ease;
        text-decoration: none; 
        &:hover {
            background-position: 0 100%;
        }
    `;

    return (
    <StyledLogo to="/" exact >F-MAX</StyledLogo>          
    );

}
    
export default Logo;
    