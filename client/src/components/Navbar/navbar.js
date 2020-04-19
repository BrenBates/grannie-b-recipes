// src/components/NavBar.js

import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import Can from "../../components/Can";

const NavBar = () => {
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
        
            <button onClick={() => console.log('made it')}>New Recipe</button>
          
        )}
        no={() => <p></p>}
        />

        <Can
        role= {user["https://grannie-b/role"]}
        perform="blogs:edit"
        yes={() => (
        
            <button onClick={() => console.log('made it')}>New Blog</button>
          
        )}
        no={() => <p></p>}
        />


        </>

      )}
    </div>
  );
};

export default NavBar;