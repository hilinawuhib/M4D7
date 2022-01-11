import { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Welcome  =()=> {
  
    return (
      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1>Welcome</h1>
          <p>
            “A book is a garden, an orchard, a storehouse, a party, a company by
            the way, a counselor, a multitude of counselors.” – Charles
            Baudelaire
          </p>
        </Container>
      </Jumbotron>
    );
  
}

export default Welcome;
