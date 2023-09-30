import Head from "next/head";
import { Provider, ThemeProvider } from "~/modules";
import store from "~/store";
import { GlobalStyle, defaultTheme } from "~/styles";
import { AppProps } from "~/types";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Desenvolvedor front-end, frontend developer, criar site, desenvolvimento e programação, aprenda a programar, portfólio de desenvolvedor"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="author" content="Raimones Barros" />
      </Head>
      <Provider rootStore={store}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
