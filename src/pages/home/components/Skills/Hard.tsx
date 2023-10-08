import { FC } from "react";
import { Icon, Tech, Techs, Text } from "./styles";

const HardSkills: FC = () => (
  <Techs>
    <Tech tabIndex={0}>
      <Icon
        src="https://icongr.am/material/language-html5.svg?size=70&color=45c7af"
        width={70}
        height={70}
        alt="ícone da Linguagem de marcação HTML5"
      />
      <Text>HTML5</Text>
    </Tech>
    <Tech tabIndex={0}>
      <Icon
        src="https://icongr.am/devicon/css3-plain.svg?size=55&color=45c7af"
        width={55}
        height={55}
        alt="ícone da Linguagem de estilos CSS3"
      />
      <Text>CSS3</Text>
    </Tech>
    <Tech tabIndex={0}>
      <Icon
        src="https://icongr.am/material/language-javascript.svg?size=70&color=45c7af"
        width={70}
        height={70}
        alt="ícone da Linguagem de programação Javascript"
      />
      <Text>Javascript</Text>
    </Tech>
    <Tech tabIndex={0}>
      <Icon
        src="https://icongr.am/material/react.svg?size=70&color=45c7af"
        width={65}
        height={65}
        alt="ícone do framework reactJS"
      />
      <Text>ReactJS</Text>
    </Tech>
    <Tech tabIndex={0}>
      <Icon
        src="https://icongr.am/material/language-typescript.svg?size=70&color=45c7af"
        width={70}
        height={70}
        alt="ícone da ferramenta de tipagem Typescript"
      />
      <Text>Typescript</Text>
    </Tech>
    <Tech tabIndex={0}>
      <Icon
        src="https://icongr.am/feather/figma.svg?size=55&color=45c7af"
        width={55}
        height={55}
        alt="ícone da Ferramenta de desing Figma"
      />
      <Text>Figma</Text>
    </Tech>
    <Tech tabIndex={0}>
      <Icon
        src="https://icongr.am/material/git.svg?size=70&color=45c7af"
        width={70}
        height={70}
        alt="ícone da ferramenta de versionamento Git"
      />
      <Text>Git</Text>
    </Tech>
    <Tech tabIndex={0}>
      <Icon
        src="https://icongr.am/material/github.svg?size=70&color=45c7af"
        width={70}
        height={70}
        alt="ícone da plataforma de hospedagem de código Github"
      />
      <Text>Github</Text>
    </Tech>
  </Techs>
);

export default HardSkills;
