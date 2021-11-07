import React from "react";
import { Row, Col, Container, Card, Button, Carousel } from "react-bootstrap";
import data from "@public/meta.json";

export const Cards: React.FC = () => {
  return (
    <Container className="my-5 flex-grow-1">
      <Row className="justify-content-center">
        <Carousel>
          {(data?.plugins ?? []).map((item) => (
            <Carousel.Item key={item.id}>
              <Card
                style={{
                  margin: "0.2rem",
                  background: item.background,
                  color: item.color,
                }}
              >
                <Row>
                  <Col sm={4}>
                    <Card.Img variant="top" src={item.url} />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Button variant="primary">Live</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};
