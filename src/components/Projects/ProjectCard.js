import { Col } from "react-bootstrap";
import  { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({Title,Info,link,techStack,Start,End})=>{
    function redirect(link){
        window.open(link);
    }
    return(
        <Col lg = {6}>
            <Card style={{
                overflow:"auto",
                marginBottom:"4%"
            }}>
                <Card.Body>
                    <Card.Title>
                        { Title }
                    </Card.Title>

                    <Card.Text>
                        { Info }<br/>
                        <b>Tech Stack:</b> { techStack }
                    </Card.Text>

                    <Card.Text>
                        
                    </Card.Text>

                    <Card.Text>
                        Start Date: { Start }
                        <br/>
                        End Date: { End }
                    </Card.Text>

                    <Button variant="primary" onClick={()=> redirect(link)}>Visit Website</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}