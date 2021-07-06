import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './normalize.css';
import './styles/main.css';
import reportWebVitals from './reportWebVitals';

import PagesRouter from './pages/PagesRouter';
import PagesLinksHeader from './pages/PagesLinksHeader';
import PagesLinksFooter from './pages/PagesLinksFooter';

ReactDOM.render(
  <BrowserRouter>
      <PagesLinksHeader />
      <PagesRouter />
      <PagesLinksFooter />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();