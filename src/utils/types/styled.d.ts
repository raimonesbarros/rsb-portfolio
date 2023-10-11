import "styled-components";
import { defaultTheme } from "~/core";

type defaultThemeType = Theme;

declare module "styled-components" {
  interface DefaultTheme extends defaultThemeType, defaultTheme {}
}
