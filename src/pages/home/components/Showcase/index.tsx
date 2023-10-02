import { MainTitle } from "~/pages/styles";
import { CaretDown, dummy } from "~/utils/assets";
import {
  BgImage,
  ShowcaseContainer,
  ShowcaseDescription,
  ShowcaseSection,
  Strong,
  Text,
} from "./styles";

const Showcase = () => {
  return (
    <ShowcaseSection id="showcase">
      <MainTitle>Portfólio de desenvolvimento front-end</MainTitle>
      <ShowcaseContainer>
        <BgImage
          src={dummy}
          alt="Imagem de fundo: homem sentado de frente para uma tela de computador"
          width={600}
          priority
        />
        <ShowcaseDescription>
          <Text>Meu nome é</Text>
          <Text>
            <Strong>Raimones,</Strong>
          </Text>
          <Text>eu sou</Text>
          <Text>
            <Strong>Desenvolvedor</Strong>
          </Text>
          <Text>e esse é meu portfólio</Text>
          <Text>
            <Strong>Front-end.</Strong>
          </Text>
        </ShowcaseDescription>
        <CaretDown size={40} />
      </ShowcaseContainer>
    </ShowcaseSection>
  );
};

export default Showcase;
