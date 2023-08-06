import { NextSeo, useDinamicRouter } from "~/modules"
import { Showcase, Skills, About, Contact } from "./components"
import { HomeContainer } from "./styles"
import { JsonLd, SEOMain } from "~/utils"
import { Footer, Header } from "../components"
import { HandleFallback } from "../components"

const Home = () => {
  const { isFallback } = useDinamicRouter()

  if (isFallback) {
    return <HandleFallback />
  }

  return (
    <HomeContainer>
      <JsonLd />
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
