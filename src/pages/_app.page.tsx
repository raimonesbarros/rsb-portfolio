import { AppProps } from "~/types"
import { ThemeProvider } from "~/modules"
import { GlobalStyle, defaultTheme } from "~/styles"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
