import { styled } from "~/modules";

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(p) => p.theme.background};
`;

export const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  min-height: calc((100vh - 4.75rem) / 2);
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 1rem;
  padding: 0 1rem;

  @media screen and (width < 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (width < 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  min-width: 232px;
  min-height: 120px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  border: 1px solid ${(props) => props.theme.border};
  border-radius: 6px;
`;

export const Heading = styled.h3`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(p) => p.theme.textLight};

  svg {
    color: ${(p) => p.theme.primary};
  }
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 100;
  padding: 0 0.5rem;
  letter-spacing: 0.06rem;
  color: ${(p) => p.theme.text};
`;

export const TechsContent = styled.div`
  width: 100%;
  max-width: 1120px;
  min-height: calc((100vh - 4.75rem) / 2);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-bottom: 1px solid ${(p) => p.theme.border};
`;

export const Techs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div:nth-child(2),
  div:nth-child(6) {
    padding-top: 0.5rem;
  }

  &:has(div:hover) {
    div:hover {
      filter: brightness(1.2);
    }
    div:not(:hover) {
      opacity: 0.7;
    }
  }

  @media screen and (width <= 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (width < 425px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Tech = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    margin-bottom: 10px;
  }
`;

export const Icon = styled.img``;

export const Strong = styled.strong`
  color: ${(p) => p.theme.textLight};
`;
