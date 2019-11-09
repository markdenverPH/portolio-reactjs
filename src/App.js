import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Base, Home} from './container';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route path="*" component={Base} />
        </Switch>
      </Router>
    );
  }
}
