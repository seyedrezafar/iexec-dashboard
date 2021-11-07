import React, { CSSProperties } from "react";
import { Jumbotron, Row, Col, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Main: React.FC = () => {
  return (
    <>
      <Jumbotron className="jumbotron" style={{ borderRadius: "0" }}>
        
        <Row>
          <Col sm={4} xs={12} className="d-flex justify-content-center align-items-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://miro.medium.com/max/1200/1*5AyYzOlGlv501PlJlIdZZQ.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8} xs={12} className="mt-auto mb-auto jumbotron-text">
            <h1 className="">NFT updated data</h1>
            <p>
              Find the best NFT based on the price on the shoulders of Oracle
            </p>
            <p>
              <Button variant="outline-light">Read More</Button>
            </p>
          </Col>
        </Row>
      </Jumbotron>
      
    </>
  );
};
