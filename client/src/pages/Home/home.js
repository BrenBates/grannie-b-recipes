import React, { Fragment } from "react";
import '../Home/home.css'
import {useAuth0} from '../../react-auth0-spa';
import Navbar from "../../components/Navbar/navbar";


function Home() {
    
const { loading} = useAuth0();

  if (loading) {
    return <div>Loading...</div>; 
  } else {

  return (

    <div>
    <Navbar />
        <h1>Welcome to the Family Kitchen!</h1>
    </div>
   
  )
}
}

export default Home;