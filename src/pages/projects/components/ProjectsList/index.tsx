import { projectsData } from "~/pages/projectsData"
import { ProjectsListContainer } from "./styles"
import Project from "./Project"

const ProjectsList = ({ projectToSee }: ProjectListProps) => {
  return (
    <ProjectsListContainer>
      {projectsData.map((project, i) => {
        return (
          <Project
            key={project.id}
            image={project.image}
            title={project.title}
            smallDescription={project.smallDescription}
            position={i}
            onProjectToSee={projectToSee}
          />
        )
      })}
    </ProjectsListContainer>
  )
}

export default ProjectsList
