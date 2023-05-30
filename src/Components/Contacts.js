import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'; 
import { Link } from "react-router-dom";
import "./Contacts.css"

function Contacts() {
  return (
    <Container style={{ display:"flex", justifyContent:"center", textAlign:"center",alignItems:"center"}}>
      <Card style={{ width: '18rem' , borderRadius:"25px", marginTop:"350px"}}>
      <Card.Body>
        <Card.Title>Mr.Delphi</Card.Title>
        <Card.Text>
          HELLO GUYS THX YOU
        </Card.Text>
        <div className="mar">
        <Link to="https://www.facebook.com/davis.lapkrajang.1/"><Card.Link>Facebook</Card.Link></Link>
        <Link to="https://www.instagram.com/dadelphi/"><Card.Link >Instagram</Card.Link></Link>
        </div>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default Contacts;
