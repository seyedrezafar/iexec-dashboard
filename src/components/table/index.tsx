import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import data from "@public/meta.json";

export const Table: React.FC = () => {
  return (
    <Container className="my-5 flex-grow-1">
      <Row className="justify-content-center no-gutters">
        <Col xs={12} className="d-flex justify-content-center">
          <h1>
            NFTs with lowest <span>price</span>
          </h1>
        </Col>

        <Col xs={12} className="crypto-table">
          {(data?.nfts ?? []).map((item) => {
            return (
              <Row className="crypto-table-row box" key={item.id}>
                <Col xs={2} className="mt-auto mb-auto">
                  <Image src={item.logo} fluid roundedCircle />
                </Col>
                <Col xs={3} className="mt-auto mb-auto">
                  <div>
                    <strong>{item.name}</strong>
                    <p>
                      <Image
                        src={item.tokenIcon}
                        style={{ maxWidth: "0.6rem" }}
                      />{" "}
                      <span className="price">{item.price}</span>
                    </p>
                  </div>
                </Col>
                <Col xs={5}></Col>
                <Col xs={1} className="mt-auto mb-auto">
                  <span style={{ color: item.color }}>{item.change}</span>
                </Col>
                <Col xs={12}>
                  <hr style={{ width: "70%" }} />
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
