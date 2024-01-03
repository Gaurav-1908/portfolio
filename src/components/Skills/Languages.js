import { SkillsCard } from "./SkillsCard";
import { Col } from "react-bootstrap";

export const Languages = () =>{
    const languages = require("../../resources/language.json");

    return(
        <Col style={{
            padding:"2%",
            paddingTop:"1%",
            marginRight:"5%",
            backgroundColor:"white"
        }}> 
        <h4><p>Languages Known</p></h4><br/>
        {languages.map(
            language=>
                <SkillsCard
                    Title={language.language}
                    Level={language.level}
                />
        )}
        </Col>
    )

}