import { Col,Row } from "react-bootstrap"
import { Phone,Map,Envelope} from 'react-bootstrap-icons';

export const GetInTouch = () =>{
    return(
        <Col style={{
            backgroundColor:"white",
            marginBottom:"4%",
            padding:"1%"
        }}>
            <h1><p>Get in Touch</p></h1>
            <Row>
                <Col xl = {4}>
                    <hr/>
                </Col>
            </Row>
            <p style={{
                fontSize:"120%"
            }}>
                Thanks, You can contact me through multiple ways, 
                start by filling the form next to you, 
                for urgency you can even contact me on whatsapp or mail, 
                also you can check out my certifications and credentials on linkedin.
            </p>
            <p>
            <Map style={{
                color:"blue",
                marginRight:"5px",
                // paddingBottom:"1%"
            }}/>
                383 Pune India
            </p>
            <p>
            <Phone style={{
                color:"blue",
                marginRight:"5px",
                // paddingBottom:"1%"
            }}/>
                +91 9869211699
            </p>
            <p>
                <Envelope style={{
                    color:"blue",
                    marginRight:"5px",
                    // paddingBottom:"1%"
                }}/>
                gaurav.gadkari1908@gmail.com
            </p>
        </Col>
    )
}