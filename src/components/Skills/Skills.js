import { Row } from "react-bootstrap";
import { SkillsHeader } from "./SkillsHeader";
import { Languages } from "./Languages";
import { Frameworks } from "./Frameworks";

export const Skills = () =>{
    return(
        <div id = "Skills" style={{
            paddingTop:"8%",
            paddingBottom:"8%",
        }}>
            <SkillsHeader/>
            <Row style={{
                paddingTop:"2%",
                padding:"1%"
            }}>
                <Languages/>
                <Frameworks/>
            </Row>
        </div>
    )
}