import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, useField } from "formik";
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

 

  
    return (
      <Container>
        <Formik
          initialValues={{
            title: "",
            ingredients: "•",
            instructions: "•",
            background: ""
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .required("Required"),
            ingredients: Yup.string()
              .required('Required'),
            instructions: Yup.string()
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
  
            console.log(values)
  
    
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