import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup
} from 'reactstrap';
import './about.css';



function About() {


  return (

    <div>
    
        <h3 className="favRecipeHeader">About Family Kitchen</h3>

        <h5>This site is dedicated to our Madre, Mother Mayhem - Diane Ivie Anderson. </h5>

        <p>This woman raised six kids that all turned out okay, with minimum psychological scarring!</p>

        <p>She worked very hard to give us all a great childhood.   To this day, she still wakes up and cleans the counters with a soapy rag each morning.</p>

        <p>Growing up, we all had delicious homecooked family meals around the table.  
        This site is dedicated to our Mother's recipes and designed for her to continue to build upon them and share her love for cooking and zest for life with the world.</p>

        <p>You can browse recipes as you wish, and you can also log in so you can save recipes to your favorites for ease of finding them later.</p>
        <img className="aboutImg" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/28700889_10156286133668216_2927732085964603378_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=lhw2BszdT9kAX8L-nRB&_nc_ht=scontent-dfw5-2.xx&oh=d2cbcd16f2a1e0a17336f8d32a7d73c6&oe=5ED9B27D" alt="family"></img>

        

   </div>
  )

}

export default About;