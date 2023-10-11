import { NextImage, styled } from "~/modules";

type Props = {
  isVisible: boolean;
};

export const ViewerContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (width > 768px) {
    max-height: calc(100vh - 108px);
  }

  @media screen and (width <= 768px) {
    min-height: 380px;
    max-height: 50vh;
  }
`;

export const ViewerContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (width <= 768px) {
    width: 100%;
    height: 100%;
    max-width: 600px;
    margin: auto;
  }
`;

export const Content = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (width <= 768px) {
    position: absolute;
    bottom: 0;
    background-color: ${(p) => p.theme.background}f0;
    padding: 1rem;
    border-radius: 8px;
    z-index: 1;
  }

  @media screen and (width <= 768px) {
    opacity: ${(p) => (p.isVisible ? "1" : "0")};
    cursor: pointer;
  }
`;

export const Subtitle = styled.h2`
  padding: 0.5rem 0;
`;

export const FullImage = styled(NextImage).attrs({ width: 600, height: 350 })`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Tags = styled.div``;

export const Link = styled.a`
  width: 45%;
  padding: 0.5rem;
  border-radius: 8px;
  font-weight: 700;
  text-align: center;
`;

export const Text = styled.p`
  text-align: justify;
  margin-top: 0.5rem;
  padding: 0 0.5rem;
`;

export const Buttons = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 1rem 0;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a:nth-child(1) {
    background: ${(p) => p.theme.primary};
    border: 2px solid ${(p) => p.theme.backgroundLight};
    color: ${(p) => p.theme.background};

    &:hover {
      filter: brightness(1.2);
    }
  }

  a:nth-child(2) {
    border: 2px solid ${(p) => p.theme.primary};
    color: ${(p) => p.theme.primary};
    background: ${(p) => p.theme.backgroundLight};

    &:hover {
      background: ${(p) => p.theme.background};
    }
  }
`;
