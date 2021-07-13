import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import './normalize.css';
import './styles/main.css';

import reportWebVitals from './reportWebVitals';

import PagesRouter from './pages/PagesRouter';
import PagesLinksHeader from './pages/PagesLinksHeader';
import PagesLinksFooter from './pages/PagesLinksFooter';
import { rootReducer } from './redux/rootReducer';

// import AuthProvider from "./context/AuthContext"

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <Provider store = {store}>
    {/* <AuthProvider> */}
      <BrowserRouter>
        <PagesLinksHeader />
        <PagesRouter />
        <PagesLinksFooter />
      </BrowserRouter>
    {/* </AuthProvider> */}
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
