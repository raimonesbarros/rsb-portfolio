import { store } from "~/core";
import {
  GetStaticProps,
  NextSeo,
  observer,
  useDynamicRouter,
  useEffect,
} from "~/modules";
import { SEOProjects, useStores } from "~/utils";
import { Footer, Header } from "../components";
import { MainTitle } from "../styles";
import { ProjectsList, Viewer } from "./components";
import { ProjectsContainer, ProjectsContent, ProjectsSection } from "./styles";
type Props = {
  projectsData: Projects;
};
const Projects = ({ projectsData }: Props) => {
  const {
    firestoreProvider: {
      fetchClientProvider,
      currentProjectId,
      changeCurrentProject,
    },
  } = useStores();
  const { isFallback } = useDynamicRouter();

  const handleFetchClientProvider = async () => {
    await fetchClientProvider();
  };

  useEffect(() => {
    fetchClientProvider();
  }, [fetchClientProvider]);

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
      <Footer />
    </>
  );
};

export default observer(Projects);

export const getStaticProps: GetStaticProps = async () => {
  const {
    firestoreProvider: { fetchClientProvider },
  } = store;

  const projectsData = await fetchClientProvider();

  return {
    props: { projectsData },
    revalidate: 60 * 60 * 1, // 1 Hour
  };
};
