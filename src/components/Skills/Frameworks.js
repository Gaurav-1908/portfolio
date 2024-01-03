import { SkillsCard } from "./SkillsCard";
import { Col } from "react-bootstrap";

export const Frameworks = () =>{
    const frameworks = require("../../resources/frameworks.json");

    return(
        <Col style={{
            padding:"2%",
            paddingTop:"1%",
            backgroundColor:"white"
        }}>
        <h4><p>Frameworks Used</p></h4><br/>
        {frameworks.map(
            framework=>
                <SkillsCard
                    Title={framework.framework}
                    Level={framework.level}
                />
        )}
        </Col>
    )

}