import React, { Fragment } from "react";
import '../Home/home.css'
import {useAuth0} from '../../react-auth0-spa';
import Navbar from "../../components/Navbar/navbar";


function Home() {
    
const { loading} = useAuth0();

  if (loading) {
    return <div>Loading... 
    <h1>Process env with react app prefix</h1>
    <h1>{process.env.REACT_APP_AUTH0_DOMAIN}</h1>
    <h1>{process.env.REACT_APP_AUTH0_CLIENT_ID}</h1>

    <h1>Auth 0 process env stufff</h1>
    <h1>{process.env.AUTH0_DOMAIN}</h1>
    <h1>{process.env.AUTH0_CLIENT_ID}</h1>

    <h1>process env</h1>
    <h1>{process.env}</h1>
    </div>;
  } else {

  return (

    <div>
    <Navbar />
        <h1>Welcome to the Family Kitchen!</h1>
        <h1>{'hello '+process.env.REACT_APP_AUTH0_DOMAIN}</h1>
    </div>
   
  )
}
}

export default Home;