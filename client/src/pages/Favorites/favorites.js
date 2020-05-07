import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  ListGroup
} from 'reactstrap';
import RecipesCard from "../../components/RecipesCard/recipescard";
import Wrapper from "../../components/Wrapper/index";
import Pagination from '../../components/Pagination';
import { useAuth0 } from "../../react-auth0-spa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"


function Favorites() {

const { user } = useAuth0();
const [recipeData, setRecipeData] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [recipesPerPage] = useState(10);


useEffect(() => {
    pullFavRecipes()
},[]);

const pullFavRecipes = () =>  {
    console.log('made it here')
    console.log(user)
    if(user) {

        let queryURL = "/api/users/favoritespage"
        axios.get(queryURL, {
            params: {
                userEmail: user.email
            }
        })
        .then(result => {
            console.log(result.data)
            setRecipeData(result.data)
        });

    }
}


  // Get current posts
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipeData.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

const renderRecipes = () => {
  if(recipeData[0]) {
    return (
      currentRecipes.map(item => 
        <RecipesCard
          key={item._id}
          id={item._id}
          title={item.title}
          ingredients={item.ingredients}
          instructions={item.instructions}
          background={item.background}
          submitter={item.submitter}
          recipeImageURL={item.recipeImageURL}
        />
        )
    )
  } else {
    return (
      <>
        <h3>
         You have no favorited recipes.  Open a recipe and click on the '<MdFavoriteBorder/>' to add it to your favorites list!
        </h3>
      </>
    )
  }

}



  return (

    <div>
    
        <h1>Your Favorite Recipes</h1>

        <Row>

          <Wrapper>
            {renderRecipes()}
          </Wrapper>
         
        </Row>

        <Pagination
            postsPerPage={recipesPerPage}
            totalPosts={recipeData.length}
            paginate={paginate}
          />
   

   </div>
  )

}

export default Favorites;