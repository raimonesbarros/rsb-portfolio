import { FC } from "react";
import { LogoSvg } from "~/utils/assets";
import { FooterContainer, FooterContent, Span, Strong, Text } from "./styles";

const Footer: FC = () => (
  <FooterContainer>
    <FooterContent>
      <Text>
        <Strong>
          <LogoSvg className="brand" /> &copy; 2022 - {new Date().getFullYear()}
        </Strong>{" "}
        | <Span>Todos os direitos reservados</Span>
      </Text>
    </FooterContent>
  </FooterContainer>
);

export default Footer;
