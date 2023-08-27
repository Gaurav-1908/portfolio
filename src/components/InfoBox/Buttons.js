import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';

export const Buttons = () =>{
    function redirect(link){
        window.open(link);
    }
    return(
        <div>
        <Button style={{
            fontSize:"24px",
            backgroundColor:"#141414",
            color:"white",
            marginRight:"2%",
            border:"black"
            }}
            onClick={()=>redirect("https://github.com/Gaurav-1908")}
        >
            <Github style={{
                color:"#39FF14",
                marginRight:"5px",
                // paddingBottom:"1%"
            }}
            
            />
            Github
        </Button>

        <Button style={{
            fontSize:"24px",
            backgroundColor:"#141414",
            color:"white",
            marginRight:"2%",
            border:"black"
            }}
            onClick={()=>redirect("https://www.linkedin.com/in/gaurav-gadkari/")}
        >
            <Linkedin style={{
                color:"#39FF14",
                marginRight:"2px"
            }}/>
            LinkedIN
        </Button>
        
        <Button style={{
            fontSize:"24px",
            backgroundColor:"#141414",
            color:"white",
            marginRight:"2%",
            border:"black"
            }}
            onClick={()=>redirect("mailto:gaurav.gadkari1908@gmail.com")}
        >
            <Envelope style={{
                color:"#39FF14",
                marginRight:"2px"
            }}/>
            Email
        </Button>
        </div>
        
    )
}