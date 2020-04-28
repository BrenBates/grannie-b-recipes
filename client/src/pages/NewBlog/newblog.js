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
import Navbar from "../../components/Navbar/navbar";
import ImageUpload from '../../components/ImageUpload';

function NewBlog(props) {
    
  
    //text input for Formik form
    const MyTextInput = ({ label, ...props }) => {
      // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
      // which we can spread on <input> and alse replace ErrorMessage entirely.
      const [field, meta] = useField(props);
      return (
        <FormGroup>
          <Label className="label-login" for={props.id || props.name}>{label}</Label>
          <input className="text-input" {...field} {...props} />
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
            <MyTextInput
              label="Title"
              name="title"
              type="text"
              placeholder="insert a title for the recipe"
            />
            <MyTextInput
              label="Ingredients"
              name="ingredients"
              type="text"
              placeholder="insert ingredients list"
            />
            <MyTextInput
            label="Instructions"
            name="instructions"
            type="text"
            placeholder="insert recipe instructions"
          />
          <MyTextInput
          label="Background"
          name="background"
          type="text"
          placeholder="insert recipe background (optional)"
        />
  
            <button type="submit">Submit</button>
          </Form>
        </Formik>
  
        {/* {props.isError && <Error>{props.errorText}</Error>} */}

        </Container>
    );
  }
  
  export default NewBlog;