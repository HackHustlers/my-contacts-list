import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
  faBirthdayCake,
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CustomCard.css";

export const CustomCard = ({ contacts }) => {
  return (
    <div>
      <Row>
        <Col className="fs-0 fw-bold">{contacts.length} users found</Col>
      </Row>
      <div className="d-flex flex-wrap justify-content-center">
        {contacts.map((contact, index) => (
          <Card style={{ width: "18rem" }} className="contact m-3" key={index}>
            <Card.Img variant="top" src={contact.picture.large} />
            <Card.Body>
              <Card.Title className="card-title text-center">
                {contact.name.title} {contact.name.first} {contact.name.last}
              </Card.Title>
              <Card.Text>
                <span className="info-label">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                {contact.phone}
              </Card.Text>
              <Card.Text
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <span className="info-label">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                {contact.email}
              </Card.Text>
              <Card.Text>
                <span className="info-label">
                  <FontAwesomeIcon icon={faBirthdayCake} />
                </span>{" "}
                {new Date(contact.dob.date).toLocaleDateString()}
              </Card.Text>
              <Card.Text>
                <span className="info-label">
                  <FontAwesomeIcon icon={faLocation} />
                </span>
                {contact.location.city}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
