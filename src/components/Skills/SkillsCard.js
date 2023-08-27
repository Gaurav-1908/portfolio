
import ProgressBar from 'react-bootstrap/ProgressBar';

export const SkillsCard = ({Title,Level}) => {
    console.log(Title);
    return(
        <div>
            <ProgressBar now={Level * 20} label={Title} style={{
                backgroundColor:"grey"
            }}/>
            <br/>
        </div>
     
    )
}