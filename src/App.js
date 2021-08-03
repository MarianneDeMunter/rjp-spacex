import React, { Component } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

//Pages
import MainPage from './pages/MainPage/MainPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import LaunchesPage from './pages/LaunchesPage/LaunchesPage';
import RocketsPage from './pages/RocketsPage/RocketsPage';
import RocketDetailPage from './pages/RocketsPage/RocketDetailPage';
import NotFoundPage from './pages/404Page/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/history' component={HistoryPage} />
          <Route exact path='/launches' component={LaunchesPage} />
          <Route exact path='/rockets' component={RocketsPage} />
          <Route path='/rockets/:id' component={RocketDetailPage} />
          <Route exact path='/error_404' component={NotFoundPage} />
          <Redirect to='/error_404' />
        </Switch>
      </Router>
    );
  }
}

export default App;
