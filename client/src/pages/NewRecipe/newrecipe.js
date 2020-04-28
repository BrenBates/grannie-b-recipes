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

    const TitleInput = ({ label, ...props }) => {
      // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
      // which we can spread on <input> and alse replace ErrorMessage entirely.
      const [field, meta] = useField(props);
      return (
        <FormGroup>
          <Label className="label-login" for={props.id || props.name}>{label}</Label>
          <br/>
          <input className="text-input" {...field} {...props} />
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </FormGroup>
      );
    };

    const BackgroundInput = ({ label, ...props }) => {
      // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
      // which we can spread on <input> and alse replace ErrorMessage entirely.
      const [field, meta] = useField(props);
      return (
        <FormGroup>
          <Label className="label-login" for={props.id || props.name}>{label}</Label>
          <br/>
          <input className="text-input" {...field} {...props} />
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </FormGroup>
      );
    };

    const BulletedInput = ({ label, ...props }) => {
      // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
      // which we can spread on <input> and alse replace ErrorMessage entirely.
      const [field, meta] = useField(props);
      return (
        <FormGroup>
          <Label className="label-login" for={props.id || props.name}>{label}</Label>
          <br/>
          <section className="textarea" contentEditable="true" className="text-input" {...field} {...props} >
            <li>Click to edit</li>
            <li></li>
            <li></li>
          </section>


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
            ingredients: "",
            instructions: "",
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
            <TitleInput
              label="Title:"
              name="title"
              type="text"
              placeholder="Insert a title for the recipe"
            />
            <br/>
            <BulletedInput
              label="Ingredients:"
              name="ingredients"
              type="text"
              placeholder="Insert ingredients list"
            />
            <br/>
            <BulletedInput
            label="Instructions:"
            name="instructions"
            type="text"
            placeholder="Insert recipe instructions"
          />
          <br/>
          <BackgroundInput
          label="Background:"
          name="background"
          type="text"
          placeholder="Insert recipe background (optional)"
        />

        <br/>
        <p className="label-upload">Upload an Image</p>
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