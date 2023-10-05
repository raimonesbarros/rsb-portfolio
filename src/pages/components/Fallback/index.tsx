import { NextImage } from "~/modules";
import { FallbackContainer } from "./styles";
import favicon from "public/favicon.png";

const HandleFallback = () => {
  return (
    <FallbackContainer>
      <NextImage src={favicon} width={30} alt="carregnado página" priority />
    </FallbackContainer>
  );
};
export default HandleFallback;
