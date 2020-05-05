import React, {useState, useEffect} from "react";
import './recipedetail.css'
import axios from 'axios';
import {
    Container,
    Row,
    Col,
    ListGroup
  } from 'reactstrap';
import { string } from "yup";

function RecipeDetail(props) {

    const [recipe,setRecipe] = useState({})
    const [ingredientArray,setIngredientArray] = useState([])

    useEffect(() => {
        pullRecipe()
    },[]);

    const pullRecipe = () => {

        let queryURL = "/api/recipes/" + props.match.params.id
    

        axios.get(queryURL)
            .then(result => {
                setRecipe(result.data)
                ingredients(result.data.ingredients)
            });

    }

    const ingredients = data => {
        
            let ingredientArray = []
            let index = 0;
            
            for(let i = 1; i < data.length; i++) {
                if(data.charAt(i) === '•') {
                    ingredientArray.push(data.substring(index,i))
                    index = i
                } 

                if(i === (data.length-1)) {
                    ingredientArray.push(data.substring(index,i+1))
                }

            }

            setIngredientArray(ingredientArray)

        
    }

    const renderIngredients = () => {

            return (
                ingredientArray.map((item,index) => 
                    <p key={index}>{item}</p>
                )
            )
      
    }


    return <div>
        <h1>{recipe.title}</h1>
             
        {renderIngredients()}

        {recipe.instructions}

        <br/>

        {recipe.background}
        
    
    </div>;
}


export default RecipeDetail;