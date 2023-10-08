import { FC } from "react";
import { store } from "~/core";
import { NextSeo, observer } from "~/modules";
import { SEOMain } from "~/utils";
import { BackToTop, Footer, Header } from "../components";
import { About, Contact, Showcase, Skills } from "./components";
import { HomeContainer } from "./styles";

const Home: FC = () => {
  const {
    theme: { mode },
  } = store;

  return (
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
  );
};

export default observer(Home);
