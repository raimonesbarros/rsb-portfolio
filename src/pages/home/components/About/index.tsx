import { FC } from "react";
import { Subtitle } from "~/pages/components";
import { FilePdf, me } from "~/utils";
import {
  AboutContainer,
  AboutContent,
  AboutSection,
  BgImage,
  Button,
  Strong,
  Text,
} from "./styles";

const About: FC = () => {
  const handleDownload = () => {
    fetch("Raimones-dev-Curriculo.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Raimones-dev-Curriculo.pdf";
        alink.click();
      });
    });
  };

  return (
    <AboutSection id="about">
      <AboutContainer>
        <Subtitle bold="Sobre mim" normal="um pouco" reverse />
        <BgImage src={me} alt="imagem de fundo: Foto de Raimones" />
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
  );
};

export default About;
