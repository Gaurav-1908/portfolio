import { Col, Row } from "react-bootstrap"
import { About } from "./About"
import { Profile } from "./Profile"

export const AboutMe = () =>{
    return(
        <div id = "About" style={{
            color:"white",
            paddingTop:"8%",
            paddingBottom:"8%"
        }}>
            <Row>
            <Col xl = {8}
            >
                <About/>
            </Col>
            <Col xl = {4}>
                <Profile/>
            </Col>
            </Row>
            
        </div>
    )
}