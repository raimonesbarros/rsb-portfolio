import { FirestoreService, getProjects } from "~/infra";
import { makeAutoObservable, makePersistable, runInAction } from "~/modules";
import { RootStore } from ".";

export default class FireStoreProvider {
  rootStore: RootStore | undefined;

  projectsData: Projects = {} as Projects;

  currentProjectId: number = 0;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
    makePersistable(this, {
      name: "FirestoreProvider",
      properties: ["projectsData", "currentProjectId"],
    });
  }

  fetchClientProvider = async (): Promise<Projects> => {
    const firestoreData = await FirestoreService.getDocData(
      process.env.NEXT_PUBLIC_FIREBASE_COLLECTION || "",
      process.env.NEXT_PUBLIC_FIREBASE_DOC_NAME || "",
    );

    const projectsPath = firestoreData.filePath;

    const projects = await getProjects(projectsPath);
    runInAction(() => {
      this.projectsData = projects.projects;
    });

    return this.projectsData;
  };

  changeCurrentProject = (index: number) => {
    runInAction(() => {
      this.currentProjectId = index;
    });
  };
}
