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



function Home() {

const [recipeData, setRecipeData] = useState([]);

const handleClick = (value) => {
  
  axios.get("/api/recipes/", {
    params: {
      value: value
    }
  })
    .then(result => {
      setRecipeData(result.data)
    });


}

useEffect(() => {
  renderRecipes()
},[recipeData]);

const renderRecipes = () => {
  if(recipeData[0]) {
    console.log('rendering recipess')
    console.log(recipeData)
    return (
      recipeData.map(item => 
        <RecipesCard
          key={item._id}
          id={item._id}
          title={item.title}
          ingredients={item.ingredients}
          instructions={item.instructions}
          background={item.background}
          submitter={item.submitter}
        />
        )
    )
  }

}


  return (

    <div>
    
        <h1>Welcome to the Family Kitchen!</h1>

        <Row>
          <button onClick ={()=>handleClick()}>all recipes</button>
          <button onClick ={()=>handleClick('salad')}>salads</button>
          <button onClick ={()=>handleClick('soup')}>soups</button>
          <button onClick ={()=>handleClick('sidesandsnacks')}>sides/snacks</button>
          <button onClick ={()=>handleClick('breakfast')}>breakfast</button>
          <button onClick ={()=>handleClick('dinner')}>dinner</button>
          <button onClick ={()=>handleClick('breads')}>breads</button>
          <button onClick ={()=>handleClick('dessert')}>desserts</button>
          <button onClick ={()=>handleClick('frostingandpiedough')}>frostings/pie doughs</button>
        </Row>

        <Row>

          <Wrapper>
            {renderRecipes()}
          </Wrapper>
          
        </Row>
   

   </div>
  )

}

export default Home;