import { styled } from "~/modules";

export const ContactSection = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
`;
export const ContactContainer = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid ${(p) => p.theme.gray600};
`;
export const ContactsList = styled.address`
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
  }
`;
export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.p`
  padding: 0.5rem 0;
  font-style: normal;
`;
