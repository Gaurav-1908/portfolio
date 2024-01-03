import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push,} from "firebase/database"

export const SendMessage = () =>{
    const [name,setName] = useState('');
    const [mail,setMail] = useState('')
    const [mess,setMess] = useState('')
    const [subject,setSubject] = useState('')

    const handleNameChange = event => {
        setName(event.target.value)
    }

    const handleMailChange = event => {
        setMail(event.target.value)
    }

    const handleMessChange = event => {
        setMess(event.target.value)
    }

    const handleSubjectChange = event => {
        setSubject(event.target.value)
    }

    const firebaseConfig = {
        apiKey: "AIzaSyCsmZutwY19mRZs7P5EKMu-tFn0YE33G4E",
        authDomain: "gaurav-gadkari.firebaseapp.com",
        databaseURL: "https://gaurav-gadkari-default-rtdb.firebaseio.com",
        projectId: "gaurav-gadkari",
        storageBucket: "gaurav-gadkari.appspot.com",
        messagingSenderId: "237899186936",
        appId: "1:237899186936:web:00058ee29d0dcccce7f10d",
        measurementId: "G-89YVG06022"
      };

    
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    const handleClick = (event) =>{
        event.preventDefault();
        console.log(name,mail,subject,mess)
        const message = {
            name: name,
            mail: mail,
            subject: subject,
            message: mess
        }
        const databaseRef = ref(database, 'messages');
        push(databaseRef, message)
          .then(() =>{
            // form.reset();
            alert('message send Succesfully');
            setName('')
            setMail('')
            setSubject('')
            setMess('')
          })
          .catch((error) =>{
            alert(error);
          })
    }
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
            <Form onSubmit={handleClick}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="Text" placeholder="Your Name" value={name} onChange={handleNameChange}/>
            </Form.Group>
            <br/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your Email" value={mail} onChange={handleMailChange}/>
            </Form.Group>
            <br/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Subject" value={subject} onChange={handleSubjectChange}/>
            </Form.Group>
            <br/>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control as="textarea" rows={4} value={mess} onChange={handleMessChange}/> 
            </Form.Group>

            <Button variant="primary" type="submit">
                Send Message
            </Button>
            </Form>
        </Col>
    )
}