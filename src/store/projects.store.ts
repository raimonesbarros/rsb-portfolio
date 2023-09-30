import {
  enableStaticRendering,
  makeAutoObservable,
  makePersistable,
} from "~/modules";
import { projectsData } from "~/pages/projectsData";
import { RootStore } from ".";

enableStaticRendering(typeof window === "undefined");
export default class ProjectsStore {
  rootStore: RootStore | undefined;

  projectsData: Projects = [] as Projects;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
    makePersistable(this, {
      name: "ProjectsData",
      properties: ["projectsData"],
    });

    this.getProjects();
  }

  getProjects = () => {
    this.projectsData = projectsData;
  };

  hydrate = (data: any) => {
    const { Projects } = data;
    if (!Projects) return;
    this.projectsData = Projects.ProjectsData;
  };
}
