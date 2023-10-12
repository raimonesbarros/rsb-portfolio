import { styled } from "~/modules";

export const ProjectsListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow: auto;
  border-bottom: 2px solid ${(p) => p.theme.border};

  &::after {
    content: "a";
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 25px;
    color: transparent;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  }

  @media screen and (width >= 768px) {
    width: 90%;
    max-height: calc(100vh - 92px);
  }
  @media screen and (width > 878px) {
    width: 70%;
  }

  @media screen and (width <= 768px) {
    width: 100%;
    max-height: calc(100vh - 480px);
    max-width: 600px;
    margin: auto;
  }
`;
