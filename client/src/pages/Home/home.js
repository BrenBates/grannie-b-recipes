import React, { Fragment } from "react";
import '../Home/home.css'
import {useAuth0} from '../../react-auth0-spa';
import Can from "../../components/Can";

// 4-19-2020 Bren Bates:
// Keeping site to a single page format.  Using role based access control to manipulate the page based on user permissions.  
// Currently, if no user exists it will ask the user to login.  If user exists with visitor home page view access it renders profile info.  
// If user exists with visitor home page edit access, render buttons to submit new recipe or new blog entries.

// Next Steps... 
// Create a compon

function Home() {
    const { loading, user } = useAuth0();

  if (loading) {
    return <div>Loading....
        <h1>Page is loading but Authentication is Responding with 404</h1>
    </div>;
  } else if (!user) {
    return (
        <div>
            <h1>Welcome to the Family Kitchen!</h1>
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
    no={() => <h2>Hello{' '+user.name}, welcome to the family kitchen!</h2>}
    />
    }
    />

    </div>
   
  );
};
};

export default Home;