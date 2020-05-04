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

     <Card className="recipeCard" body inverse style={{ backgroundColor: '#aaaaaa', borderColor: '#5d2906' }}>
        <CardImg top width="100%" src='/assets/318x180.svg'/>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          {/* <CardSubtitle>{props.ingredients}}</CardSubtitle> */}
          <Link to={"/recipes/" + props.id}>
            <Button className="recipeCardBtn">Go to Recipe</Button>
          </Link>
        </CardBody>
      </Card>

    );
  };
  
  export default RecipesCard;