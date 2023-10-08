import "styled-components";
import { defaultTheme, lightTheme } from "~/core";

type defaultThemeType = typeof defaultTheme | typeof lightTheme;

declare module "styled-components" {
  interface DefaultTheme extends defaultThemeType, defaultTheme {}
}
