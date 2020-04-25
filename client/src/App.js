import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './pages/Home/home';
import Admin from './pages/Admin/admin';
import NewBlog from "./pages/NewBlog/newblog";
import NewRecipe from "./pages/NewRecipe/newrecipe";
import NavBar from "./components/Navbar/navbar";
import NoMatch from './pages/nomatch';
import {useAuth0} from './react-auth0-spa'



function App(props) {

  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>
      
      <p>Loading</p>

      </div>
      );
    
  }


  return (

      <Router>      
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/newrecipe" component={NewRecipe} />
            <Route path="/newblog" component={NewBlog} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    
  );
}

export default App;
