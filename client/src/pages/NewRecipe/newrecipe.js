import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import {useAuth0} from '../../react-auth0-spa';
import { Field, Formik, Form, useField } from "formik";
import {
    Container,
    Row,
    Col,
    ListGroup,
    FormGroup,
    Label
  } from 'reactstrap';
import './newrecipe.css'
import ImageUpload from '../../components/ImageUpload';


function NewRecipe(props) {

    const { loading, user } = useAuth0();

    
  if (loading || !user) {
    return <div>Log in to view content</div>;
  }
  
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

    const SelectInput = ({ label, ...props }) => {
      // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
      // which we can spread on <input> and alse replace ErrorMessage entirely.
      const [field, meta] = useField(props);
      return (
        <FormGroup>
          <Label className="label-login" for={props.id || props.name}>{label}</Label>
          <br/>
          
          <Field as="select" name="category">
            <option value=""></option>
            <option value="salad">Salad</option>
            <option value="soup">Soup</option>
            <option value="sidesandsnacks">Sides and Snacks</option>
            <option value="breakfast">Breakfast</option>
            <option value="dinner">Dinner</option>
            <option value="breads">Breads</option>
            <option value="dessert">Dessert</option>
            
          </Field>
      
          
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </FormGroup>
      );
    };





 

    return (
      <Container>
             
        <Formik
          initialValues={{
            title: "a",
            category: "",
            ingredients: "•",
            instructions: "•",
            background: "c"
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .required("Required"),
            category: Yup.string()
              .required("Required"),
            ingredients: Yup.string()
              .required('Required'),
            instructions: Yup.string()
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
  
            let payload = {
              title: values.title,
              category: values.category,
              ingredients: values.ingredients,
              instructions: values.instructions,
              background: values.background,
              submitter: user.name
            }

            console.log(payload)

            axios.post("/api/recipes", payload).then(result => {
              console.log('this is the axios result')
              console.log(result)
            })
  
    
          }}
        >
          <Form>
            <div className="margin-top-login" />
            <br/>
            <TextInput
              label="Title:"
              name="title"
              type="text"
              placeholder="Insert a title for the recipe"
            />
            <br/>
           
            <SelectInput
            label="Category:"
            name="category"
            type="text"
            placeholder="What type of food is this?"
             />
          <br/>
            <TextInput
              label="Ingredients:"
              name="ingredients"
              type="text"
              placeholder="Insert ingredients list"
            />
            <br/>
            <TextInput
            label="Instructions:"
            name="instructions"
            type="text"
            placeholder="Insert recipe instructions"
          />
          <br/>
          <TextInput
          label="Background:"
          name="background"
          type="text"
          placeholder="Insert recipe background (optional)"
        />

        <br/>
        <p className="label-upload">Upload an Image - optional</p>
        <ImageUpload />
        <br/>
        <br/>
  
            <button type="submit">Submit New Recipe</button>
          </Form>
        </Formik>
  
        {/* {props.isError && <Error>{props.errorText}</Error>} */}

        </Container>
    );
  }
  
  export default NewRecipe;