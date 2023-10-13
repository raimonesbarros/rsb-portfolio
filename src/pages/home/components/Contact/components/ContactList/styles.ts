import { styled } from "~/modules";

export const ContactListContainer = styled.address`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;

  padding: 1rem 0;

  @media screen and (width < 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (width < 375px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactCard = styled.div`
  width: 100%;
  max-width: 170px;

  padding: 1rem 0;

  svg {
    color: ${(p) => p.theme.primary};
    margin-bottom: 0.5rem;
  }
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-style: normal;
  padding: 0.1rem 0;
  color: ${(p) => p.theme.text};
`;

export const Strong = styled.strong`
  font-style: normal;
  color: ${(p) => p.theme.textLight};
`;
