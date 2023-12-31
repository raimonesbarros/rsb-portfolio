import { styled } from "~/modules";

export const Title = styled.h2`
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
  flex-wrap: wrap;

  margin-top: 1rem;

  font-size: 1.8rem;
  font-family: "Roboto";
  font-weight: 100;
  color: ${(p) => p.theme.text};
`;

export const Strong = styled.strong`
  color: ${(p) => p.theme.textLight};
`;

export const Span = styled.span``;
