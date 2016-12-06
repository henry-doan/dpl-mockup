import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="courses" component={Courses} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
);
