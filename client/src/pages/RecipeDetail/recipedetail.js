import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './recipedetail.css';
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
    FormGroup,
    Label,
    ListGroup
  } from 'reactstrap';
import Wrapper from "../../components/Wrapper/index";
import Can from "../../components/Can";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { FaEdit } from "react-icons/fa";
import { useAuth0 } from "../../react-auth0-spa";
import * as Yup from "yup";
import { Field, Formik, Form, useField } from "formik";

function RecipeDetail(props) {

    const { user } = useAuth0();
    const [recipe,setRecipe] = useState({})
    const [userFavorite, setUserFavorite] = useState(false)
    const [ingredientArray,setIngredientArray] = useState([])
    const [ingredientValues,setIngredientValues] = useState('')
    const [deleteModal, setDeleteModal] = useState(false);
    const [ingredientModal, setIngredientModal] = useState(false);
    const [instructionModal, setInstructionModal] = useState(false);
    const [pictureModal, setPictureModal] = useState(false);

  const toggleDeleteModal = () => setDeleteModal(!deleteModal);
  const toggleIngredientModal = () => setIngredientModal(!ingredientModal);
  const toggleInstructionModal = () => setInstructionModal(!instructionModal);
  const togglePictureModal = () => setPictureModal(!pictureModal);

  //text inputs for Formik form

  const TextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <FormGroup>
        <Label className="label-login" for={props.id || props.name}>{label}</Label>
        <br/>
        <textarea className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </FormGroup>
    );
  };

  //use effect for page load
    
    useEffect(() => {
        pullRecipe()
        pullUserFavorites()
    },[ingredientValues]);


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


        axios.get("/api/recipes/delete", {
            params: {
                recipeID: props.match.params.id
            }
        }).then(result => {
            console.log(result)
        })


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
            setIngredientValues(ingredientArray.map((item,index) => (item)).join(''))

        
    }



    const renderIngredients = (type) => {
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
                        
                          {/* Delete Button Modal */}
                         
                          <Button color="danger" onClick={toggleDeleteModal}>Delete Recipe</Button>
                         
                          <Modal isOpen={deleteModal} toggle={toggleDeleteModal} className="deleteModal">
                            <ModalHeader toggle={toggleDeleteModal}>Delete Recipe</ModalHeader>
                            <ModalBody>
                                Do you wish to permanently delete this recipe?
                            </ModalBody>
                            <ModalFooter>
                            <Link to={"/"}>
                              <Button color="danger" onClick={() => deleteRecipe()}>Yes</Button>{' '}
                            </Link>
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
            
           
                {/* Edit Ingredients Modal */}
                         
                <Button onClick={toggleIngredientModal}><FaEdit /></Button>
                         
                         <Modal isOpen={ingredientModal} toggle={toggleIngredientModal} className="ingredientModal">
                           <ModalHeader toggle={toggleIngredientModal}>Edit Ingredients</ModalHeader>
                           <ModalBody>                              
                                <Formik
                                initialValues={{
                                    ingredients: ingredientValues
                                }}
                                validationSchema={Yup.object({
                                    ingredients: Yup.string()
                                    .required("Required"),
                                })}
                                onSubmit={(values, { setSubmitting }) => {

                                      let payload = {
                                        recipeID: props.match.params.id,
                                        ingredients: values.ingredients
                                      }
                        
                                    console.log(payload)

                                    axios.put("/api/recipes", payload).then(result => {
                                      console.log('this is the axios result')
                                      console.log(result)
                                      toggleIngredientModal()
                                      setIngredientValues(result.data)
                                      
        
                                    })
                        
                            
                                }}
                                >
                                <Form>
                                    <div className="margin-top-login" />

                                    <TextInput
                                    label="Ingredients:"
                                    name="ingredients"
                                    type="text"
                                    placeholder="Insert ingredients list"
                                    />

                                    <button type="submit">Submit</button>
                                    <button onClick={toggleIngredientModal}>Cancel</button>
                                </Form>
                                </Formik>
                           </ModalBody>
                         </Modal>


            {renderIngredients()}
            </Card>

            </Col>

         <Col sm="12" md="6">

        <Card className="recipeDetailCard" body inverse style={{ backgroundColor: '#aaaaaa', borderColor: '#5d2906' }}>


               {/* Edit Instructions Modal */}
                         
               <Button onClick={toggleInstructionModal}><FaEdit /></Button>
                         
                         <Modal isOpen={instructionModal} toggle={toggleInstructionModal} className="instructionModal">
                           <ModalHeader toggle={toggleInstructionModal}>Edit Instructions</ModalHeader>
                           <ModalBody>
                               {recipe.instructions}
                               {recipe.background}
                           </ModalBody>
                           <ModalFooter>
                        
                             <Button color="secondary" onClick={toggleInstructionModal}>Submit</Button>
                           </ModalFooter>
                         </Modal>

       
                {recipe.instructions}
                <br/>
                {recipe.background}
                <br/>
          

         </Card>
         </Col>


         <Col sm="12" md="6">
            <Card className="recipeDetailCard" body inverse style={{ backgroundColor: '#aaaaaa', borderColor: '#5d2906' }}>

                 {/* Edit Picture Modal */}
                         
               <Button onClick={togglePictureModal}><FaEdit /></Button>
                         
                         <Modal isOpen={pictureModal} toggle={togglePictureModal} className="pictureModal">
                           <ModalHeader toggle={togglePictureModal}>Edit Pictures</ModalHeader>
                           <ModalBody>
                               
                           </ModalBody>
                           <ModalFooter>
                        
                             <Button color="secondary" onClick={togglePictureModal}>Submit</Button>
                           </ModalFooter>
                         </Modal>



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