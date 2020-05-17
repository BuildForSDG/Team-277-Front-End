import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./security/Login"

class App extends React.Component {
  render() {
    return (
     <Router>
       <Route path="/" component={Login}/>
     </Router>
    );
  }
}

export default App;
