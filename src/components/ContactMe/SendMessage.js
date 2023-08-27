import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const SendMessage = () =>{
    return(
        <Col style={{
            backgroundColor:"white",
            marginBottom:"4%",
            padding:"1%"

        }}>
            <h1><p>Send Message</p></h1>
            <Row>
                <Col xl = {4}>
                    <hr/>
                </Col>
            </Row>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="Text" placeholder="Your Name" />
            </Form.Group>
            <br/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <br/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <br/>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control as="textarea" rows={4} /> 
            </Form.Group>

            <Button variant="primary" type="submit">
                Send Message
            </Button>
            </Form>
        </Col>
    )
}