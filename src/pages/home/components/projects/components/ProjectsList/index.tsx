import { FC } from "react";
import Project from "./Project";
import { ProjectsListContainer } from "./styles";

type Props = {
  projectsData: Projects;
  changeCurrentProject: (index: number) => void;
};

const ProjectsList: FC<Props> = ({ projectsData, changeCurrentProject }) => (
  <ProjectsListContainer>
    {projectsData.map((project, i) => {
      return (
        <Project
          key={project.id}
          image={project.image}
          title={project.title}
          smallDescription={project.smallDescription}
          position={i}
          changeCurrentProject={changeCurrentProject}
        />
      );
    })}
  </ProjectsListContainer>
);

export default ProjectsList;
