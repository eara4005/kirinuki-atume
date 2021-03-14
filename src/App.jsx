import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutPage from "./component/pages/AboutPage";
import HomePage from "./component/pages/HomePage";
import './App.css';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/abouts" component={AboutPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
};
export default App;
