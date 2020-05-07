import React, {useState, useEffect} from "react";
import '../Home/home.css'
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


function Home() {

const [recipeData, setRecipeData] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [recipesPerPage] = useState(10);

const handleClick = (value) => {
  
  axios.get("/api/recipes/", {
    params: {
      value: value
    }
  })
    .then(result => {
      setRecipeData(result.data)
      setCurrentPage(1)
    });


}

useEffect(() => {
  renderRecipes()
},[recipeData]);


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
  }

}


  return (

    <div>
    

        <Row>
          <Col xs="0" sm="2">
          </Col>

          <Col xs="12" sm="8" className="pl-0 pr-0">
          
            <button onClick ={()=>handleClick()}>All Recipes</button>
            <button onClick ={()=>handleClick('salad')}>Salads</button>
            <button onClick ={()=>handleClick('soup')}>Soups</button>
            <button onClick ={()=>handleClick('sidesandsnacks')}>Sides/Snacks</button>
            <button onClick ={()=>handleClick('breakfast')}>Breakfast</button>
            <button onClick ={()=>handleClick('dinner')}>Dinner</button>
            <button onClick ={()=>handleClick('breads')}>Breads</button>
            <button onClick ={()=>handleClick('dessert')}>Desserts</button>
            <button onClick ={()=>handleClick('frostingandpiedough')}>Frostings/Pie Doughs</button>
          
          </Col>

          <Col xs="0" sm="2">
          </Col>

        </Row>

        <br/>

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

export default Home;