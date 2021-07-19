import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Page_Main from './Page_Main';
import Page_CinemasAll from './Page_CinemasAll';
import Page_Cinema from './Page_Cinema';
import Page_MoviesAll from './Page_MoviesAll';
import Page_Movie from './Page_Movie';
import Page_About from './Page_About';
import Page_LogIn from './Page_LogIn';
import Page_Cabinet from './Page_Cabinet';
import Page_404 from './Page_404';

const PagesRouter: React.FC = () => {

    return (
      <Switch>
        <Route path="/" exact component={Page_Main} />
        <Route path="/cinemas" component={Page_CinemasAll} />
        <Route path="/cinemas/:cinemaId" component={Page_Cinema} />
        <Route path="/movies" component={Page_MoviesAll} />
        <Route path="/movies/:movieId" component={Page_Movie} />
        <Route path="/about" component={Page_About} />
        <Route path="/logIn" component={Page_LogIn} />
        <Route path="/cabinet" component={Page_Cabinet}/>
        <Route path="/404" component={Page_404} />
        <Redirect to='/404'/>
      </Switch>
    );
}
    
export default PagesRouter;
    