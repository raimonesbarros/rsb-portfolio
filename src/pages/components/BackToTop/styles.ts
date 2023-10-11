import { css, keyframes, styled } from "~/modules";

interface Props {
  $scroll: number;
}

const appear = keyframes({
  "0%": { opacity: 1, transform: "translateY(0%) scale(1)" },
  "100%": { opacity: 0, transform: "translateY(150%) scale(0.5)" },
});

export const IconContainer = styled.div<Props>`
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  display: ${(p) => p.$scroll < 201 && "none"};

  animation: ${(p) =>
    p.$scroll > 200 &&
    css`
      ${appear} 500ms reverse forwards ease-in-out
    `};
  animation: ${(p) =>
    p.$scroll <= 200 &&
    css`
      ${appear} 400ms forwards ease-in-out
    `};
  z-index: 1;

  svg {
    color: ${(p) => p.theme.primary};
    background-color: ${(p) => p.theme.background};
    border-radius: 50%;
  }
`;
