// src/components/RecipesCard.js

import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
  } from 'reactstrap';
  import { Link } from "react-router-dom";
import './recipescard.css'


const RecipesCard = (props) => {
  
  
    return (

      <Link to={"/recipes/" + props.id}>
     <Card className="recipeCard" body inverse style={{ backgroundColor: '#aaaaaa', borderColor: '#5d2906' }}>
        <CardImg top width="100%" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg'/>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          {/* <CardSubtitle>{props.ingredients}}</CardSubtitle> */}
         
              {/* <Button className="recipeCardBtn">Go to Recipe</Button> */}
         
        </CardBody>
      </Card>
       </Link>

    );
  };
  
  export default RecipesCard;