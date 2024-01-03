import { Row } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import { ProjectHeader } from "./ProjectHeader"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue,} from "firebase/database";
import { useEffect, useState } from "react";

export const Projects = () =>{
    const [projects,setProjects] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const firebaseConfig = {
            apiKey: "AIzaSyCsmZutwY19mRZs7P5EKMu-tFn0YE33G4E",
            authDomain: "gaurav-gadkari.firebaseapp.com",
            databaseURL: "https://gaurav-gadkari-default-rtdb.firebaseio.com",
            projectId: "gaurav-gadkari",
            storageBucket: "gaurav-gadkari.appspot.com",
            messagingSenderId: "237899186936",
            appId: "1:237899186936:web:00058ee29d0dcccce7f10d",
            measurementId: "G-89YVG06022"
          };
    
        
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        const databaseRef = ref(database, 'projects');

        onValue(databaseRef, (projects) => {
            const data = projects.val();
            setProjects(data);
            console.log(data);
            console.log(projects)
            setLoading(false)
          });

    },[])

    

    
    // console.log(data);
    // const projects = require('../../resources/projects.json')
   
    console.log(projects);
    return(
        <div id="Projects" style={{
            paddingTop:"8%",
            paddingBottom:"8%"
        }}
        >
            <ProjectHeader/>
            {loading ? (
            <p>Loading...</p>
        ) : (
            <Row>
                {projects.map(
                    project=>
                        <ProjectCard
                            Title = {project.Titile}
                            Info = {project.Info}
                            link= {project.link}
                            techStack={project.techStack}
                            Start = {project.Start}
                            End = {project.End}
                        />
                    )}
            </Row>
        )}
            
        </div>
    )
}