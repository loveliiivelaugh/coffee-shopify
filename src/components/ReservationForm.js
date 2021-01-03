import React from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormField from "./FormField";

const ReservationForm = (props) => {
  return (  
    <Form action="" style={{ marginBottom:'25px'}}>
      <Form.Row>
        <Form.Group as={Col}>
          <FormField size="sm" placeholder="First Name" />
        </Form.Group>
        <Form.Group as={Col}>
          <FormField size="sm" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <FormField size="sm" placeholder="Date" />
        </Form.Group>
        <Form.Group as={Col}>
          <FormField size="sm" placeholder="Time" />
        </Form.Group>
        <Form.Group as={Col}>
          <FormField size="sm" placeholder="Phone" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <center><Button variant={props.buttonVariant || "light"}>Appointment</Button></center>
      </Form.Row>
    </Form>
  )
}
export default ReservationForm