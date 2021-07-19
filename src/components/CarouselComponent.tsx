import React from 'react';
import styled from 'styled-components';

import Carousel from 'react-bootstrap/Carousel'
import BtnGetTicket from './BtnGetTicket';

import bgWidow from '../img/image/carousel_widow.jpg'
import bgDance from '../img/image/carousel_dance.jpg'
import bgKiller from '../img/image/carousel_killer.jpg'
import bgSpeed from '../img/image/carousel_speed.png'

// import { NavLink } from 'react-router-dom';

const StyledItem = styled(Carousel.Item)`
  height: 70vh;
  text-align: left;
  h2, p {
    text-align: left;
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: .12ex;
  }
  p{
    color: #0072ce;
    font-weight: 600;
  }
`
const StyledDiv = styled.div`
background-size: cover;
width: 100%;
height: 100%;
transition-duration: 1s ;
&:hover {
  transform: scale(1.1)
}
&:before{
  content: '';
  width: 100%;
  height: 100%;
  background: linear-gradient(to right,rgba(0,0,0,.55) 0,rgba(0,0,0,.3) 50%,rgba(0,0,0,.3) 50%,rgba(0,0,0,0) 90%);
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 1s ease-out;
  z-index: 1;
}
&:hover:before{
  opacity: 0
}
`
const CarouselComponent :React.FC = () => {

    return (
      <Carousel controls={false}>
        <StyledItem interval={5000} >
          <StyledDiv style={{backgroundImage: `url(${bgWidow})`}}/>
          <Carousel.Caption>
            <p>БОЕВИК, ФАНТАСТИКА, ПРИКЛЮЧЕНИЯ, 18+</p>
            <h2 className="display-4">ЧЁРНАЯ ВДОВА</h2>
            <BtnGetTicket/>
          </Carousel.Caption>
        </StyledItem>

        <StyledItem interval={5000}>
          <StyledDiv style={{backgroundImage: `url(${bgSpeed})`}}/>
          <Carousel.Caption>
            <p>БОЕВИК, ТРИЛЛЕР, КРИМИНАЛ, ПРИКЛЮЧЕНИЯ, 12+</p>
            <h2 className="display-4">ФОРСАЖ 9</h2>
            <BtnGetTicket/>
          </Carousel.Caption>
        </StyledItem>

        <StyledItem interval={5000}>
          <StyledDiv style={{backgroundImage: `url(${bgKiller})`}}/>
          <Carousel.Caption>
            <p>КОМЕДИЯ, БОЕВИК, 18+</p>
            <h2 className="display-4">ТЕЛОХРАНИТЕЛЬ ЖЕНЫ КИЛЛЕРА</h2>
            <BtnGetTicket/>
          </Carousel.Caption>
        </StyledItem>

        <StyledItem interval={5000}>
          <StyledDiv style={{backgroundImage: `url(${bgDance})`}}/>
          <Carousel.Caption>
            <p>МЮЗИКЛ, ДРАМА, МЕЛОДРАМА, 12+</p>
            <h2 className="display-4">НА ВЫСОТЕ МЕЧТЫ</h2>
            <BtnGetTicket/>
          </Carousel.Caption>
        </StyledItem>
      </Carousel>
    )
}

export default CarouselComponent