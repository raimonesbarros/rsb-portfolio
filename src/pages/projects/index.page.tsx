import { NextSeo, useDynamicRouter, useState } from "~/modules";
import { SEOProjects } from "~/utils";
import { Footer, HandleFallback, Header } from "../components";
import { projectsData } from "../projectsData";
import { MainTitle } from "../styles";
import { ProjectsList, Viewer } from "./components";
import { ProjectsContainer, ProjectsContent, ProjectsSection } from "./styles";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const { isFallback } = useDynamicRouter();

  if (isFallback) {
    return <HandleFallback />;
  }

  function handleProjectToSee(index: number) {
    setCurrent(index);
  }

  return (
    <>
      <Header />
      <ProjectsSection>
        <NextSeo {...SEOProjects} />
        <MainTitle>
          Projetos desenvolvidos pelo desenvolvedor Raimones
        </MainTitle>
        <ProjectsContainer>
          <ProjectsContent>
            <Viewer
              image={projectsData[current].image}
              title={projectsData[current].title}
              tags={projectsData[current].tags}
              fullDescription={projectsData[current].fullDescription}
              deploy={projectsData[current].deploy}
              repository={projectsData[current].repository}
            />
            <ProjectsList projectToSee={handleProjectToSee} />
          </ProjectsContent>
        </ProjectsContainer>
      </ProjectsSection>
      <Footer />
    </>
  );
};

export default Projects;
