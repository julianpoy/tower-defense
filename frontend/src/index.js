import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import GamePage from 'src/views/GamePage.tsx'

const routing = (
  <Router>
    <Switch>
      <Route path="" render={() => <GamePage />} />
      <Route render={ () => <Redirect to={{ pathname: "" }} /> }/>
    </Switch>
  </Router>
)

const domContainer = document.createElement('div');
document.body.appendChild(domContainer);
ReactDOM.render(routing, domContainer);
