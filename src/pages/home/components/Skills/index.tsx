import { FC } from "react";
import { Subtitle } from "~/pages/components";
import HardSkills from "./Hard";
import Cards from "./Soft";
import { SkillsContainer, SkillsSection, TechsContent } from "./styles";

const Skills: FC = () => (
  <SkillsSection>
    <SkillsContainer>
      <Subtitle bold="Habilidades" normal="algumas" reverse />
      <Cards />
    </SkillsContainer>
    <TechsContent>
      <Subtitle bold="Tecnologias" normal="principais" reverse />
      <HardSkills />
    </TechsContent>
  </SkillsSection>
);

export default Skills;
