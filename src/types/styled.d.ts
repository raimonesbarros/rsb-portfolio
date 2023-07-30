import 'styled-components'
import { defaultTheme } from '../styles/themes/defaultTheme'

type defaultThemeType = typeof defaultTheme

declare module 'styled-components' {
  interface DefaultTheme extends defaultThemeType, defaultTheme {}
}
