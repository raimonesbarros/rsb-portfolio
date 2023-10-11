import { keyframes, styled } from "~/modules";

const fallbackAnimation = keyframes({
  "50%": { width: "40px", height: "25px" },
});

export const FallbackContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: "auto";
    animation: ${fallbackAnimation} 1s ease-in-out infinite;
  }
`;
