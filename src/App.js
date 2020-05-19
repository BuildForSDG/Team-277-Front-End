import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Login from './Home/Login';
import Register from './Home/Register';
import Profile from './Dashboard/Profile';

class App extends React.Component {

    render(){
        return(
            <Router>
                <div className="container">
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/profile" component={Profile} />
                </div>
            </Router>
        );
    }
}

export default App;
