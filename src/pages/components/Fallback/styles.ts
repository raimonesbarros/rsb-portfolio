import { styled } from "~/modules"

export const FallbackContainer = styled.div`
  @keyframes fallbackAnimation {
    50% {
      width: 40px;
      height: 25px;
    }
  }

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: auto;
    animation: fallbackAnimation 1s ease-in-out infinite;
  }
`
