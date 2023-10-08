import { FC } from "react";
import { animateScroll } from "~/modules";
import { ArrowCircleUp, useScroll } from "~/utils";
import { IconContainer } from "./styles";

const BackToTop: FC = () => {
  const { scrollY } = useScroll();

  return (
    <IconContainer $scroll={scrollY} onClick={animateScroll.scrollToTop}>
      <ArrowCircleUp size={40} />
    </IconContainer>
  );
};

export default BackToTop;
