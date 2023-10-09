import { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "~/core";
import { Provider, observer } from "~/modules";
import store from "../core/store";

const App: FC<AppProps> = ({ Component, pageProps }) => {
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
        <Component {...pageProps} />
        <GlobalStyle />
      </Provider>
    </>
  );
};

export default observer(App);
