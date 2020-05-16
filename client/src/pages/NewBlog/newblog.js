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



function NewBlog(props) {

const [selector, setSelector] = useState('');
const [blogItem, newBlogItem] = useState([]);

const handleClick = value => {
  console.log(value)
}

return (

  <>

  <button onClick={() => handleClick('h1')}>h1</button>
  <button value="h2">h2</button>
  <button value="h3">h3</button>
  <button value="h4">h4</button>
  <button value="h5">h5</button>
  <button value="h6">h6</button>
  <button value="ul">Bullet List</button>
  <button value="ol">Numbered List</button>
  <button value="li">List Item</button>
  <button value="p">Paragraph</button>




  </>

)
    
}

  
  export default NewBlog;