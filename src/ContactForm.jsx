import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Button, Col } from "react-bootstrap";
import statesArr from "./states";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/conformation/${name}`);
  }

  function handleInputChange({ target }) {
    setName(target.value);
  }

  function handleRadio({ target }) {
    setGender(target.value);
  }

  return (
    <div className="form">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Enter Your Name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Check
              inline
              label="Male"
              value="Male"
              type={"radio"}
              checked={gender === "Male" ? true : false}
              onChange={handleRadio}
            />
            <Form.Check
              inline
              label="Female"
              value="Female"
              type={"radio"}
              checked={gender === "Female" ? true : false}
              onChange={handleRadio}
            />
            <Form.Check
              inline
              label="Other"
              value="Other"
              type={"radio"}
              checked={gender === "Other" ? true : false}
              onChange={handleRadio}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="number">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" placeholder="Enter Phone Number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Jadavpur, Kolkata" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select">
                {statesArr.map((s) => {
                  return <option>{s}</option>;
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactForm;
