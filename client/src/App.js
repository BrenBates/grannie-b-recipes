import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './pages/Home/home';
import Admin from './pages/Admin/admin';
import NavbarComponent from "./components/Navbar/navbar"
import NoMatch from './pages/nomatch';



function App(props) {


  return (



      <Router>      
      <NavbarComponent />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    
  );
}

export default App;
