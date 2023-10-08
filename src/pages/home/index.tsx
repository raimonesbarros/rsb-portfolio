import { NextSeo } from "~/modules";
import { SEOMain } from "~/utils";
import { BackToTop, Footer, Header } from "../components";
import { About, Contact, Showcase, Skills } from "./components";
import { HomeContainer } from "./styles";

const Home = () => (
  <HomeContainer>
    <NextSeo {...SEOMain} />
    <Header />
    <Showcase />
    <Skills />
    <About />
    <Contact />
    <Footer />
    <BackToTop />
  </HomeContainer>
);

export default Home;
