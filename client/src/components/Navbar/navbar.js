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

    <>

    <Row className = "navRow">

    <Col xs="5" className="pr-0 pl-0">
      <h1>Family Kitchen</h1>
    </Col>

    <Col xs="7" className="d-flex flex-sm-row-reverse pr-0 pl-0">
    

    <div>
      {!user && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
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

    </Col>
    </Row>

    <br/>

    </>
  );
};

export default NavBar;