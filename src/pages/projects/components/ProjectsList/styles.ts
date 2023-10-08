import { styled } from "~/modules";

export const ProjectsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow: auto;
  border-bottom: 2px solid ${(p) => p.theme.gray600};

  @media screen and (width > 768px) {
    width: 80%;
    height: 100%;
    max-height: calc(100vh - 92px);
  }
  @media screen and (width <= 768px) {
    width: 100%;
    max-height: calc(100vh - 534px);
    max-width: 600px;
    margin: auto;
  }
`;
