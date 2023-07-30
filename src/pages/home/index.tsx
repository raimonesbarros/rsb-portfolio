import { NextSeo } from "~/modules"
import { Showcase, Skills, About, Contact } from "./components"
import { HomeContainer } from "./styles"
import { SEOMain } from "~/utils"
import { Footer, Header } from "../components"

const Home = () => {
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
  )
}

export default Home
