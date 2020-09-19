import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import HistoryPage from '../historyPage/HistoryPage';
import LaunchesPage from '../launchesPage/LaunchesPage';
import NavigationBar from '../navigationBar/NavigationBar';
import PageNotFound from '../common/PageNotFound';
import styles from './app.module.scss';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div className={styles.content}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/launches" component={LaunchesPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
