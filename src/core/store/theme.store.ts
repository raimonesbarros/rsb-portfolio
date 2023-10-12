import { makeAutoObservable, makePersistable, runInAction } from "~/modules";
import { defaultTheme, lightTheme } from "..";

export default class ThemeStore {
  mode: Mode = "dark" as Mode;

  theme: Theme = defaultTheme as Theme;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "ThemeStore",
      properties: ["mode", "theme"],
    });
  }

  setTheme = () => {
    runInAction(() => {
      if (this.mode === "light") {
        this.mode = "dark";
        this.theme = defaultTheme;
      } else {
        this.mode = "light";
        this.theme = lightTheme;
      }
    });
  };
}
