import { FilePdf, me } from "~/assets"
import { Span, Strong, Title } from "../../styles"
import {
  AboutSection,
  AboutContent,
  Button,
  AboutContainer,
  BgImage,
  Text,
} from "./styles"

const About = () => {
  const handleDownload = () => {
    // using Java Script method to get PDF file
    fetch("Raimones-dev-Curriculo.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement("a")
        alink.href = fileURL
        alink.download = "Raimones-dev-Curriculo.pdf"
        alink.click()
      })
    })
  }

  return (
    <AboutSection id="about">
      <AboutContainer>
        <Title>
          <Span>um pouco</Span>
          <Strong>Sobre mim</Strong>
        </Title>
        <BgImage src={me} alt="imagem de fundo: Foto de Raimones" width={400} />
        <AboutContent>
          <Text>
            Eu sou o <Strong>Raimones</Strong>, tenho{" "}
            <Strong>{new Date().getFullYear() - 1995} anos</Strong> de idade.{" "}
            <Strong>Profissional do comércio</Strong> com 10 anos de atuação,
            entusiasta de tecnologia, em <Strong>transição de carreira.</Strong>
            <br />
            <br />
            Autodidata por necessidade, possuo conhecimentos na área de{" "}
            <Strong>Tecnologia da informação</Strong>: Montagem e manutenção de
            computadores, Hardwares e Softwares.
            <br />
            <br />E focado em <Strong>Desenvolvimento Front-end</Strong>, busco
            uma <Strong>oportunidade</Strong> de atuar nesse mercado e{" "}
            <Strong>aprender muito mais</Strong> do que escrever códigos.
            <br />
            <Button onClick={handleDownload}>
              <FilePdf size={25} />
              CURRICULUM
            </Button>
          </Text>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  )
}

export default About
