import { NextSeo, useDinamicRouter, useState } from "~/modules"
import { projectsData } from "../projectsData"
import { ProjectsList, Viewer } from "./components"
import { ProjectsContainer, ProjectsContent, ProjectsSection } from "./styles"
import { MainTitle } from "../styles"
import { SEOProjects } from "~/utils/next-seo/projects"
import { Footer, HandleFallback, Header } from "../components"

const Projects = () => {
  const [current, setCurrent] = useState(0)
  const { isFallback } = useDinamicRouter()

  if (isFallback) {
    return <HandleFallback />
  }

  function handleProjectToSee(index: number) {
    setCurrent(index)
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
  )
}

export default Projects
