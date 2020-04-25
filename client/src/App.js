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
      <h1>react app auth0 domain</h1>
      <h1>{process.env.REACT_APP_AUTH0_DOMAIN}</h1>

      <h1>no react prefix</h1>
      <h1>{process.env.AUTH0_DOMAIN}</h1>
      <h1>{process.env.AUTH0_CLIENT_ID}</h1>
      
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
