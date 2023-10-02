import { configurePersistable } from "~/modules";
import { isClient } from "~/utils";
import FirestoreProvider from "./firestoreProvider.store";

class RootStore {
  firestoreProvider: FirestoreProvider;

  constructor() {
    this.firestoreProvider = new FirestoreProvider(this);
  }
}

configurePersistable({
  debugMode: false,
  storage: isClient ? localStorage : undefined,
});

const store = new RootStore();

export { FirestoreProvider, RootStore };

export default store;
