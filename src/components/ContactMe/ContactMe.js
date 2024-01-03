import { Row } from "react-bootstrap";
import { SendMessage } from "./SendMessage";
import { GetInTouch } from "./GetInTouch";
import { ContactmeHeader } from "./ContactMeHeader";

export const ContactMe = () =>{
    return(
        <div id = "Contact Me" style={{
            paddingTop:"8%",
            paddingBottom:"8%",
            
        }}
        >
            <ContactmeHeader/>
            <Row style={{
              
                // padding:"1.5%",
                // marginBottom:"20%",
                marginLeft:"1px",
                marginRight:"1px"
                
                
            }}>
                <SendMessage/>
                <GetInTouch/>
            </Row>
        </div>
        
    );
}