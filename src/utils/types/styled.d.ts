import "styled-components";
import store from "~/core/store";

type defaultThemeType = ThemeStore<Theme>;

declare module "styled-components" {
  interface DefaultTheme extends defaultThemeType, store.theme.theme {}
}
