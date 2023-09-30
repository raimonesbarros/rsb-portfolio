import { configurePersistable } from "~/modules";
import { isClient } from "~/utils";
import ProjectsStore from "./projects.store";

class RootStore {
  projects: ProjectsStore;

  constructor() {
    this.projects = new ProjectsStore(this);
  }
}

configurePersistable({
  debugMode: false,
  storage: isClient ? localStorage : undefined,
});

const store = new RootStore();

export { ProjectsStore, RootStore };

export default store;
