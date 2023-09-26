import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { JsonLd } from "~/utils";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <>
        <Html lang="pt-BR">
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <JsonLd />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin={"anonymous"}
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&family=Roboto:wght@100;400;700&display=swap"
              rel="stylesheet"
            />
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
            />
            <meta name="theme-color" content="#45C7AF" />
            <link rel="icon" href="favicon.svg" type="image/x-icon" />
            <link rel="manifest" href="/manifest.json" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
