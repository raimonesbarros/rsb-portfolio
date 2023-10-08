import { configurePersistable } from "~/modules";
import { isClient } from "~/utils";
import FirestoreProvider from "./firestoreProvider.store";
import ThemeStore from "./theme.store";

class RootStore {
  firestoreProvider: FirestoreProvider;

  theme: ThemeStore;

  constructor() {
    this.firestoreProvider = new FirestoreProvider(this);
    this.theme = new ThemeStore();
  }
}

configurePersistable({
  debugMode: false,
  storage: isClient ? localStorage : undefined,
});

const store = new RootStore();

export { FirestoreProvider, RootStore, ThemeStore };

export default store;
