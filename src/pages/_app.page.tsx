import { AppProps } from "~/types"
import { ThemeProvider } from "~/modules"
import { GlobalStyle, defaultTheme } from "~/styles"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Desenvolvedor front-end, frontend developer, criar site, desenvolvimento e programação, aprenda a programar, portfólio de desenvolvedor"
        />
        <meta name="author" content="Raimones Barros" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
