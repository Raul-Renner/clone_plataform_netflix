import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';

import WindowSerie from './components/FeatureSerieWindow/FeatureSerieWindow';

import WindowMovie from './components/FeatureMovieWindow/FeatureMovieWindow';





function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>

                <Route path="/series" component={WindowSerie}/>

                <Route path="/filmes" component={WindowMovie}/>

                
            </Switch>
        </BrowserRouter>
    );
}
/** SWITCH
 * GARANTIR QUE UMA UNICA ROTA SEJA EXECUTADA POR MOMENTO
 * 
 */
export default Routes;