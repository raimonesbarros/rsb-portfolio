import { Code, Devices, HandTap, Layout } from "~/assets"
import { Title, Span, Strong } from "../../styles"
import {
  Card,
  Cards,
  SkillsSection,
  SkillsContainer,
  Techs,
  TechsContent,
  Text,
  Heading,
  Icon,
} from "./styles"

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsContainer>
        <Title>
          <Span>algumas</Span>
          <Strong>Habilidades</Strong>
        </Title>
        <Cards>
          <Card>
            <Heading>
              <Code size={32} />
              <Strong>Código semântico</Strong>
            </Heading>
            <Text>
              Estrutura descritiva clara e objetiva para facilitar a leitura e
              interpretação, especialmente de motores de busca
            </Text>
          </Card>
          <Card>
            <Heading>
              <Devices size={32} />
              <Strong>Responsividade</Strong>
            </Heading>
            <Text>
              Estilos preparados para se adaptar aos diferentes softwares e
              dispositivos
            </Text>
          </Card>
          <Card>
            <Heading>
              <Layout size={32} />
              <Strong>Design atrativo</Strong>
            </Heading>
            <Text>
              Criação visual utilizando técnicas de design como psicologia das
              cores, tipografia, hierarquia e etc...
            </Text>
          </Card>
          <Card>
            <Heading>
              <HandTap size={32} />
              <Strong>Dinamicidade</Strong>
            </Heading>
            <Text>
              Uso de métodos dinâmicos e de interatividade com o usuário para
              garantir a melhor experiência
            </Text>
          </Card>
        </Cards>
      </SkillsContainer>
      <TechsContent>
        <Title>
          <Strong>Tecnologias</Strong>
          <Span>que estou utilizando</Span>
        </Title>
        <Techs>
          <Icon
            src="https://icongr.am/material/language-html5.svg?size=70&color=45c7af"
            width={70}
            height={70}
            alt="ícone da Linguagem de marcação HTML5"
            title="HTML5"
          />
          <Icon
            src="https://icongr.am/devicon/css3-plain.svg?size=55&color=45c7af"
            width={70}
            height={70}
            alt="ícone da Linguagem de estilos CSS3"
            title="CSS3"
          />
          <Icon
            src="https://icongr.am/material/language-javascript.svg?size=70&color=45c7af"
            width={70}
            height={70}
            alt="ícone da Linguagem de programação Javascript"
            title="JavaScript"
          />
          <Icon
            src="https://icongr.am/material/react.svg?size=70&color=45c7af"
            width={70}
            height={70}
            alt="ícone do framework reactJS"
            title="ReactJS"
          />
          <Icon
            src="https://icongr.am/material/language-typescript.svg?size=70&color=45c7af"
            width={70}
            height={70}
            alt="ícone da ferramenta de tipagem Typescript"
            title="TypeScript"
          />
          <Icon
            src="https://icongr.am/feather/figma.svg?size=55&color=45c7af"
            width={70}
            height={70}
            alt="ícone da Ferramenta de desing Figma"
            title="Figma"
          />
          <Icon
            src="https://icongr.am/material/git.svg?size=70&color=45c7af"
            width={70}
            height={70}
            alt="ícone da ferramenta de versionamento Git"
            title="Git"
          />
          <Icon
            src="https://icongr.am/material/github.svg?size=70&color=45c7af"
            width={70}
            height={70}
            alt="ícone da plataforma de hospedagem de código Github"
            title="Github"
          />
        </Techs>
      </TechsContent>
    </SkillsSection>
  )
}

export default Skills
