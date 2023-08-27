import { Row } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import { ProjectHeader } from "./ProjectHeader"

export const Projects = () =>{
    const projects = require('../../resources/projects.json')
    return(
        <div id="Projects" style={{
            paddingTop:"8%",
            paddingBottom:"8%"
        }}
        >
            <ProjectHeader/>
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
        </div>
    )
}