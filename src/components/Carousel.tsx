import React from 'react';
import styled from 'styled-components';

// import { NavLink } from 'react-router-dom';

// import './Carousel.scss';

const CarouselDiv = styled.div`
    height: 750px;
    background: url('https://6a25bbd04bd33b8a843e-9626a8b6c7858057941524bfdad5f5b0.ssl.cf5.rackcdn.com/styles/movie_1500x580/rcf/movies/slider_image/BLKW019DOM_IMAX_com_Movie_Page_1500x580_ENG_V4_R1.jpg?itok=wVAY_2gM') center center no-repeat;
    background-size: cover;
`

const Carousel :React.FC = () => {

    return (
        <CarouselDiv>
            Carousel
        </CarouselDiv>
    )
}

export default Carousel