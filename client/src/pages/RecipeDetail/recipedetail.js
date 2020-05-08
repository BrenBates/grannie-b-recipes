import React, {useState, useEffect} from "react";
import './recipedetail.css'
import axios from 'axios';
import {
    Card,
    Container,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Col,
    ListGroup
  } from 'reactstrap';
import Wrapper from "../../components/Wrapper/index";
import Can from "../../components/Can";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { useAuth0 } from "../../react-auth0-spa";

function RecipeDetail(props) {

    const { user } = useAuth0();
    const [recipe,setRecipe] = useState({})
    const [userFavorite, setUserFavorite] = useState(false)
    const [ingredientArray,setIngredientArray] = useState([])
    const [deleteModal, setDeleteModal] = useState(false);

  const toggleDeleteModal = () => setDeleteModal(!deleteModal);
    
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

    const deleteRecipe = () => {
        console.log('goodbye world')
    }


    const pullUserFavorites = () => {

        //Pull the user favorites and compare if the current recipe is in the user favorites list.  If it isn't, then set false to the state hook userFavorite.  
        //if it is, set user favorite to true.

        if(user) {

            console.log('pulling user favorites')

            let queryURL = "/api/users/favorites"

            axios.get(queryURL, {
                params: {
                    recipeID: props.match.params.id,
                    userEmail: user.email
                }
            })
                .then(result => {
                    console.log('this is the result')
                    console.log(result.data)
                    if (result.data === true) {
                        setUserFavorite(true)
                    }
                   
                })
        }

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
                    console.log('this is the result')
                    console.log(result.data) 
                    if(result.data === true) {
                        setUserFavorite(true)
                    } else if (result.data === false) {
                        setUserFavorite(false)
                    }
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

    const renderAdminPanel = () => {

        if(user) {

   
        return (

          
           
                <Can
                role= {user["https://grannie-b/role"]}
                perform="recipes:edit"
                yes={() => (
                    <>
                        <Col sm="4">
                        <Card className="recipeDetailCard" body inverse style={{ backgroundColor: '#aaaaaa', borderColor: '#5d2906' }}> 

                          <button>Edit Recipe</button>
                         
                        
                          {/* Delete Button Modal */}
                          <Button color="danger" onClick={toggleDeleteModal}>Delete</Button>
                          <Modal isOpen={deleteModal} toggle={toggleDeleteModal} className="deleteModal">
                            <ModalHeader toggle={toggleDeleteModal}>Delete Recipe</ModalHeader>
                            <ModalBody>
                                Do you wish to permanently delete this recipe?
                            </ModalBody>
                            <ModalFooter>
                              <Button color="danger" onClick={() => deleteRecipe}>Yes</Button>{' '}
                              <Button color="secondary" onClick={toggleDeleteModal}>No</Button>
                            </ModalFooter>
                          </Modal>





                        </Card>

                        </Col>
                
                    </>
                    
                )}
            
                />


          


          
        )

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

        {renderAdminPanel()}


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