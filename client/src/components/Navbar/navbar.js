// src/components/NavBar.js

import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import Can from "../../components/Can";

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (
        <>
      <button onClick={() => logout()}>Log out</button>

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

        </>

      )}
    </div>
  );
};

export default NavBar;