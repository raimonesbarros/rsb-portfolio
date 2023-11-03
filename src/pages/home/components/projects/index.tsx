import { FC } from "react";
import { observer } from "~/modules";
import { Subtitle } from "../../../components";
import { ProjectsList, Viewer } from "./components";
import { ProjectsContainer, ProjectsContent, ProjectsSection } from "./styles";

type Props = {
  projectsData: Projects;
  currentProjectId: number;
  changeCurrentProject: (index: number) => void;
};

const Projects: FC<Props> = ({
  projectsData,
  currentProjectId,
  changeCurrentProject,
}) => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <Subtitle bold="Projetos" normal="alguns" reverse />
        <ProjectsContent>
          <Viewer
            image={projectsData[currentProjectId].image}
            title={projectsData[currentProjectId].title}
            tags={projectsData[currentProjectId].tags}
            fullDescription={projectsData[currentProjectId].fullDescription}
            deploy={projectsData[currentProjectId].deploy}
            repository={projectsData[currentProjectId].repository}
          />
          <ProjectsList
            projectsData={projectsData}
            changeCurrentProject={changeCurrentProject}
          />
        </ProjectsContent>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default observer(Projects);
