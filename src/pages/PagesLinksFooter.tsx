import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { AppStateType } from '../redux/rootReducer';

import {Container} from '@material-ui/core';
import {Instagram , Twitter, YouTube, Facebook, Phone, LocationOn} from '@material-ui/icons';

import Logo from '../components/Logo';

const StyledFooter = styled.footer`
  background-color: #000912;
  color: white;
`;
const FlexedContainer = styled(Container)`
  padding-top: 75px;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
`;
const StyledUl = styled.ul`
  font-size: 22px;
  color: white;
  font-weight: 600;
`;
const StyledLink = styled(NavLink)`
  font-size: 18px;
  color: white;
  font-weight: 400;
  &:hover {
    color: #0072ce;
  }
`;
const FlexedColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PagesLinksFooter: React.FC<any> = ({userData}) => {

  return (
    <StyledFooter >
      <FlexedContainer maxWidth="xl">
        <FlexedColumn>
          <Logo color = "white"/>
          <div style={{marginTop: '20px'}}>
            <a href="https://www.instagram.com/" title="_blank"> <Instagram fontSize="large" style={{ color: "white" }}/> </a>
            <a href="https://twitter.com/" title="_blank"> <Twitter fontSize="large" style={{ color: "white" }}/> </a>
            <a href="https://www.youtube.com/" title="_blank"> <YouTube fontSize="large" style={{ color: "white" }}/> </a>
            <a href="https://www.facebook.com/" title="_blank"> <Facebook fontSize="large" style={{ color: "white" }}/> </a>
          </div>
        </FlexedColumn>

        <StyledUl>Информация:
          <li> <StyledLink to="/" exact >Главная</StyledLink> </li>
          <li> <StyledLink to="/movies" >Фильмы</StyledLink> </li>
          <li> <StyledLink to="/cinemas">Кинотеатры</StyledLink> </li>
          <li> <StyledLink to="/about" className="PageLink" activeClassName="ActivePageLink">О нас</StyledLink> </li>
          <li> <StyledLink to={userData?"/cabinet":"/logIn"}>Личный кабинет</StyledLink> </li>
        </StyledUl>
        <div >
          <ul><Phone />+375 (29) 123 45 67
            <li>Пн - Вс с 10:00 до 23:00</li>
            <li>Без выходных</li>
          </ul>
          <ul ><LocationOn />Адрес:
            <li>г. Минск, ул.Революционная, д.5, оф.1</li>
          </ul>
        </div>
      </FlexedContainer> 
    </StyledFooter> 
  );

}

const mapStatetoProps  = (state:AppStateType) => {
  return {
    userData: state.user.userObj
  }
}
    
export default connect(mapStatetoProps, null)(PagesLinksFooter);
    
// export default PagesLinksFooter;
    