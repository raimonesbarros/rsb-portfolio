import { styled } from "~/modules";

export const ProjectsSection = styled.section`
  width: 100%;
  min-height: calc(100vh - 4.75rem);

  display: flex;
  justify-content: center;

  padding: 0 1rem;
  margin-top: 4.75rem;

  background-color: ${(p) => p.theme.backgroundLight};
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export const ProjectsContent = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1rem;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
  overflow: hidden;

  @media screen and (width <= 768px) {
    flex-direction: column;
  }
`;
