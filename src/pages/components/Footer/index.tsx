import { animateScroll } from "~/modules";
import { ArrowCircleUp, LogoSvg } from "~/utils/assets";
import {
  FooterContainer,
  FooterContent,
  Icon,
  Span,
  Strong,
  Text,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Text>
          <Strong>
            <LogoSvg className="brand" /> &copy; 2022 -{" "}
            {new Date().getFullYear()}
          </Strong>{" "}
          | <Span>Todos os direitos reservados</Span>
        </Text>
        <Icon onClick={animateScroll.scrollToTop}>
          <ArrowCircleUp size={40} />
        </Icon>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
