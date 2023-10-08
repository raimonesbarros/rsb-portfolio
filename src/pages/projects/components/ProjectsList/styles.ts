import { styled } from "~/modules";

export const ProjectsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 20px;

  overflow: auto;
  border-bottom: 2px solid ${(p) => p.theme.border};

  @media screen and (width > 768px) {
    width: 80%;
    height: 100%;
    max-height: calc(100vh - 76px);
  }

  @media screen and (width <= 768px) {
    width: 100%;
    max-height: calc(100vh - 480px);
    max-width: 600px;
    margin: auto;
  }
`;
