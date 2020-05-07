import React, {useState, useEffect} from "react";
import './recipedetail.css'
import axios from 'axios';
import {
    Card,
    Container,
    Row,
    Col,
    ListGroup
  } from 'reactstrap';
import Wrapper from "../../components/Wrapper/index";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { useAuth0 } from "../../react-auth0-spa";

function RecipeDetail(props) {

    const { user } = useAuth0();
    const [recipe,setRecipe] = useState({})
    const [userFavorite, setUserFavorite] = useState(false)
    const [ingredientArray,setIngredientArray] = useState([])
    
    useEffect(() => {
        pullRecipe()
        pullUserFavorites()
    },[]);

    const pullRecipe = () => {

        let queryURL = "/api/recipes/" + props.match.params.id
    

        axios.get(queryURL)
            .then(result => {
                setRecipe(result.data)
                ingredients(result.data.ingredients)
            });

    }

    const pullUserFavorites = () => {
        console.log('pulling user favorites')
    }

    const toggleUserFavorite = () => {
        console.log('toggling user favorite') 
        console.log(user)


            let queryURL = "/api/users/favorites"

            axios.post(queryURL, {
    
                recipeID: props.match.params.id,
                userEmail: user.email,
                favorite: userFavorite

            })
                .then(result => {
                    console.log(result)
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

    const renderFavorite = () => {
    
    if(user) {

        if(userFavorite === false) {
            return (
                <MdFavoriteBorder/>
            )
        } else {
            return (
                <MdFavorite/>
            )
        }

    }
       
    }


    return ( <>

    <Row>  
        <Col sm="6">
            <Card className="recipeDetailCard" body inverse style={{ backgroundColor: '#aaaaaa', borderColor: '#5d2906' }}> 
            <h3>
                {recipe.title + '  '}
                <button className="favButton" onClick={() => toggleUserFavorite()}>
                 {renderFavorite()}
                </button>
               
            </h3>
            
            
            </Card>
        </Col>


    </Row>
        
        <Row>

            <Col sm="12" md="6">
                
            <Card className="recipeDetailCard" body inverse style={{ backgroundColor: '#aaaaaa', borderColor: '#5d2906' }}>
            {renderIngredients()}
            </Card>

            </Col>

         <Col sm="12" md="6">

        <Card className="recipeDetailCard" body inverse style={{ backgroundColor: '#aaaaaa', borderColor: '#5d2906' }}>
       
                {recipe.instructions}
                <br/>
                {recipe.background}
                <br/>

                <Wrapper>
                    <img className="recipeDetailImage" src={recipe.recipeImageURL}></img>
                 </Wrapper>
          

         </Card>
         </Col>
      
    </Row>
        </>
    );
}


export default RecipeDetail;