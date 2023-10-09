import { FC, useEffect, useState } from "react";
import { defaultTheme, lightTheme, store } from "~/core";
import { NextSeo, ThemeProvider, observer } from "~/modules";
import { SEOMain } from "~/utils";
import { BackToTop, Footer, Header } from "../components";
import { About, Contact, Showcase, Skills } from "./components";
import { HomeContainer } from "./styles";

const Home: FC = () => {
  const {
    themeStore: { mode },
  } = store;
  const [theme, setTheme] = useState<Mode>();

  useEffect(() => {
    setTheme(mode);
  }, [mode]);

  return (
    theme && (
      <ThemeProvider theme={theme === "light" ? lightTheme : defaultTheme}>
        <HomeContainer>
          <NextSeo {...SEOMain} />
          <Header />
          <Showcase $light={mode === "light"} />
          <Skills />
          <About />
          <Contact />
          <Footer />
          <BackToTop />
        </HomeContainer>
      </ThemeProvider>
    )
  );
};

export default observer(Home);
