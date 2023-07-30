import { NextSeo, useState } from "~/modules"
import { projectsData } from "../projectsData"
import { ProjectsList, Viewer } from "./components"
import { ProjectsContainer, ProjectsContent, ProjectsSection } from "./styles"
import { Span, Strong, Title } from "../home/styles"
import { MainTitle } from "../styles"
import { SEOProjects } from "~/utils/next-seo/projects"
import { Footer, Header } from "../components"

const Projects = () => {
  const [current, setCurrent] = useState(0)

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
          <Title>
            <Span>alguns dos meus</Span>
            <Strong>Projetos</Strong>
          </Title>
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
