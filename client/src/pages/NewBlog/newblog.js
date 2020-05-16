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
const [listCount, setListCount] = useState(0);
const [blogItem, newBlogItem] = useState([]);

const handleClick = value => {
  setSelector(value)
}


useEffect(() => {
  renderSelection()
},[selector]);

useEffect(() => {
  renderList()
},[listCount]);


const renderSelection = (list) =>  {

  if(!list) {
    return (
      <>
       
        <textarea>
        </textarea>
        <button>Add</button>
      </>
         )
        }

  if(list) { 
    return (
      <>
      <button onClick={() => setListCount(listCount+1)}>+</button>
      
       {renderList()}
        
      </>
    )
  }
 
}


const renderList = () => {
  for(let i = 0; i < listCount; i++) {
    return (
      <li><textarea></textarea></li>
    )
  }
}


return (

   <Container>

     <Row>

      <button onClick={() => handleClick('p')}>Paragraph</button>
      <button onClick={() => handleClick('h1')}>h1</button>
      <button onClick={() => handleClick('h2')}>h2</button>
      <button onClick={() => handleClick('h3')}>h3</button>
      <button onClick={() => handleClick('h4')}>h4</button>
      <button onClick={() => handleClick('h5')}>h5</button>
      <button onClick={() => handleClick('h6')}>h6</button>
      <button onClick={() => handleClick('ul')}>Bullet List</button>
      <button onClick={() => handleClick('ol')}>Number List</button>
      
      </Row>

      <Row>
        <Col xs="6">


          {selector === 'h1' ? <h1>{renderSelection()}</h1> 
          : selector === 'h2' ? <h2>{renderSelection()}</h2>
          : selector === 'h3' ? <h3>{renderSelection()}</h3>
          : selector === 'h4' ? <h4>{renderSelection()}</h4>
          : selector === 'h5' ? <h5>{renderSelection()}</h5>
          : selector === 'h6' ? <h6>{renderSelection()}</h6>
          : selector === 'p' ? <p>{renderSelection()}</p>
          : selector === 'ul' ? <ul>{renderSelection('list')}</ul>
          : selector === 'ol' ? <ol>{renderSelection('list')}</ol>
          
          : <p>Select an item to add</p>}
           
          

        </Col>
      </Row>    

    </Container>



 

)
    
}

  
  export default NewBlog;