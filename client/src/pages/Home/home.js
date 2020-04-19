import React, { Fragment } from "react";
import '../Home/home.css'
import {useAuth0} from '../../react-auth0-spa';
import Can from "../../components/Can";

function Home() {
    const { loading, user } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  } else if (!user) {
    return (
        <div>
            <h1>Welcome to the Family Recipe Collection</h1>
            <h2>Please Log In</h2>
        </div>
    )
  } else {

 

  return (

    <div>

    <Can
    role= {user["https://grannie-b/role"]}
    perform="home-page:edit"
    yes={() => (
        <Fragment>
            <button>New Blog</button>
            <button>New Recipe</button>
        </Fragment>
    )}
    no={() => 
    
        
        <Can
    role= {user["https://grannie-b/role"]}
    perform="home-page:visit"
    yes={() => (

    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>

  )}
    no={() => <h2>Hello{' '+user.name}, welcome to the family recipe collection!</h2>}
    />
    }
    />

    

    </div>
   
  );
};
};

export default Home;