import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './pages/Home/home';
import Admin from './pages/Admin/admin';
import NavBar from "./components/Navbar/navbar"
import NoMatch from './pages/nomatch';
import {useAuth0} from './react-auth0-spa'



function App(props) {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }


  return (



      <Router>      
      <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    
  );
}

export default App;
