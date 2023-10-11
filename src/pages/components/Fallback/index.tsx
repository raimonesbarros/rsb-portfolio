import { FC } from "react";
import { NextImage } from "~/modules";
import { FallbackContainer } from "./styles";
import favicon from "public/favicon.png";

const HandleFallback: FC = () => (
  <FallbackContainer>
    <NextImage src={favicon} width={30} alt="carregando página" priority />
  </FallbackContainer>
);

export default HandleFallback;
