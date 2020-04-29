import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";
import {useAuth0} from './react-auth0-spa';
import Admin from "./pages/Admin/admin";
import NewBlog from "./pages/NewBlog/newblog";
import NewRecipe from "./pages/NewRecipe/newrecipe";
import NoMatch from "./pages/NoMatch";
import history from "./utils/history"
import Navbar from "./components/Navbar/navbar";



function App() {


  return (

    <div className="App">
  
      <Router history={history}>  
      <div> 
      
      <Navbar />
    

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/newrecipe" component={NewRecipe} />
            <Route path="/newblog" component={NewBlog} />
            <Route component={NoMatch} />
          </Switch>
      </div>   

      </Router>

      </div>

      
    
  );
}

export default App;
