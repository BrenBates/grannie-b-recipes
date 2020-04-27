import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/home";
import Admin from "./pages/Admin/admin";
import NewBlog from "./pages/NewBlog/newblog";
import NewRecipe from "./pages/NewRecipe/newrecipe";
import NoMatch from "./pages/nomatch";
import history from "./utils/history"



function App() {

  return (

      <Router history={history}>      
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
