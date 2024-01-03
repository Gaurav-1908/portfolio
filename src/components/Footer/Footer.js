import { Row } from "react-bootstrap"

export const Footer = () =>{
    return(
        <Row style={{
            textAlign:"center",
            color:"white"
        }}>
            <p style={{
                fontSize:"120%"
            }}>Designed and Developed by 
            <spam> </spam>
                <span style={{
                    color:"#39FF14"
                }}>Gaurav Gadkari</span><br/>
                Bulit with <spam> </spam>
                <span style={{
                    color:"#39FF14"
                }}>
                    React js, bootstrap
                    </span> .
                </p>
        </Row>
    )
}