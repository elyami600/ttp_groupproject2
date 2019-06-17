import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import CampusShow from './CampusShow';
import Notfound from './notfound';



const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Campus</Link>
        </li>
        <li>
          <Link to="/">Students</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/" component={CampusShow} />
        <Route path="/" component={CampusShow} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)



ReactDOM.render(<App />, document.getElementById('root'));

