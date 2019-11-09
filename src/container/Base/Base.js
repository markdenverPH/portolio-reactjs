import React, { Component } from 'react'
import { CustomNav, WorksDetail } from '../../components/index';
import { About, Works } from '../index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class Base extends Component {
  render() {
    return (
      <div>
        <CustomNav />
        <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/works" component={Works} />
            <Route path="/works/:workItem" component={WorksDetail} />
            <Route path="*">
              <h1>Page Not Found.</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
