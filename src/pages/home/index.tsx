import { NextSeo, useDynamicRouter } from "~/modules";
import { SEOMain } from "~/utils";
import { Footer, HandleFallback, Header } from "../components";
import { About, Contact, Showcase, Skills } from "./components";
import { HomeContainer } from "./styles";

const Home = () => {
  const { isFallback } = useDynamicRouter();

  if (isFallback) {
    return <HandleFallback />;
  }

  return (
    <HomeContainer>
      <NextSeo {...SEOMain} />
      <Header />
      <Showcase />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
