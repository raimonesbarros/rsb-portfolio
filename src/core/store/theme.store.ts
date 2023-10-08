import {
  enableStaticRendering,
  makeAutoObservable,
  makePersistable,
} from "~/modules";
import { defaultTheme, lightTheme } from "..";

enableStaticRendering(typeof window === "undefined");
export default class ThemeStore {
  mode: Mode = "" as Mode;

  theme: Theme = {} as Theme;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "ThemeStore",
      properties: ["mode", "theme"],
    });
  }

  getLocalTheme = async () => {
    if (this.mode === "light") {
      this.theme = lightTheme;
    } else {
      this.mode = "dark";
      this.theme = defaultTheme;
    }
  };

  setDarkTheme = (): void => {
    this.mode = "dark";
    this.theme = defaultTheme;
  };

  setLightTheme = (): void => {
    this.mode = "light";
    this.theme = lightTheme;
  };
}
