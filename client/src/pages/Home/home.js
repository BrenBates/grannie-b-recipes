import React from "react";
import '../Home/home.css'
import {
  Container,
  Row,
  Col,
  ListGroup
} from 'reactstrap';



function Home() {




  return (

    <div>
    
        <h1>Welcome to the Family Kitchen!</h1>

        <Row>
          <button value="all">all recipes</button>
          <button value="salad">salads</button>
          <button value="soup">soups</button>
          <button value="sidesandsnacks">sides/snacks</button>
          <button value="breakfast">breakfast</button>
          <button value="dinner">dinner</button>
          <button value="breads">breads</button>
          <button value="dessert">desserts</button>
          <button value="frostingandpiedough">frostings/pie doughs</button>
        </Row>
   

   </div>
  )

}

export default Home;