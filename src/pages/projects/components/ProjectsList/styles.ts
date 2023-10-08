import { styled } from "~/modules";

export const ProjectsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border-bottom: 0.5rem;

  overflow: auto;
  border-bottom: 2px solid ${(p) => p.theme.border};

  @media screen and (width >= 768px) {
    width: 90%;
    max-height: calc(100vh - 92px);
  }
  @media screen and (width > 878px) {
    width: 70%;
  }

  @media screen and (width <= 768px) {
    width: 100%;
    max-height: calc(100vh - 5rem);
    max-width: 600px;
    margin: auto;
  }
`;
