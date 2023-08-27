import { Image } from "react-bootstrap"
export const Profile = () =>{
    return(
        <Image src = {"/profile.jpg"} alt="my Photo"
            style={{
                height:"100%",
                width:"100%",
                Object:"cover",
                float:"center",
            }}
            roundedCircle
            mxAuto
            dBlock
        />
    )
}