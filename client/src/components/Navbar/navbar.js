// src/components/NavBar.js

import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import Can from "../../components/Can";
import {
  Row,
  Col
} from 'reactstrap';
import "./navbar.css"

const NavBar = (props) => {
  const { loginWithRedirect, logout, user } = useAuth0();

  return (

    <div className="d-flex">

    

    <div className="mr-auto">
    <h1>Family Kitchen</h1>
    </div>
     
   

   
    

    <div className="ml-auto">
      {!user && (

        <>
        <button onClick={() => loginWithRedirect({})}>Log in</button>

        <Link to={"/about"}>
          <button>About</button>
        </Link>

        <Link to={"/"}>
          <button>Home</button>
        </Link>
        </>
        
      )}

      {user && (
        <div>
      <button onClick={() => logout()}>Log out</button>
     
      <Link to={"/"}>
            <button>Home</button>
      </Link>
    
      <Link to={"/favorites"}>
            <button>Favorites</button>
      </Link>
  

        <Can
        role= {user["https://grannie-b/role"]}
        perform="recipes:edit"
        yes={() => (
        
          <Link to={"/newrecipe"}>
            <button>New Recipe</button>
          </Link>
        )}
       
        />

        <Can
        role= {user["https://grannie-b/role"]}
        perform="blogs:edit"
        yes={() => (
        
          <Link to={"/newblog"}>
            <button>New Blog</button>
          </Link>
          
        )}
  
        />
        
        
        </div>

        

      )}
    </div>

   

    <br/>

    </div>
  );
};

export default NavBar;