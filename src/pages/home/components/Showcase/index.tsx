import { FC } from "react";
import { observer } from "~/modules";
import { MainTitle } from "~/pages/styles";
import { useScroll } from "~/utils";
import { CaretDown, dummy } from "~/utils/assets";
import {
  BgImage,
  ShowcaseContainer,
  ShowcaseDescription,
  ShowcaseSection,
  Strong,
  Text,
} from "./styles";

type Props = {
  $light?: boolean;
};

const Showcase: FC<Props> = ({ $light }) => {
  const { scrollY } = useScroll();

  return (
    <ShowcaseSection id="showcase">
      <MainTitle>Portfólio de desenvolvimento front-end</MainTitle>
      <ShowcaseContainer $light={$light}>
        <BgImage
          src={dummy}
          alt="Imagem de fundo: homem sentado de frente para uma tela de computador"
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
        {scrollY < 100 && <CaretDown size={40} />}
      </ShowcaseContainer>
    </ShowcaseSection>
  );
};

export default observer(Showcase);
