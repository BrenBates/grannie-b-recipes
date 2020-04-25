import React, { Fragment } from "react";
import '../Home/home.css'
import {useAuth0} from '../../react-auth0-spa';
import Navbar from "../../components/Navbar/navbar";


function Home() {


  return (

    <div>
    <Navbar />
        <h1>Welcome to the Family Kitchen!</h1>
       
    </div>
   
  )

}

export default Home;