import { styled } from "~/modules";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 4.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;

  background-color: ${(p) => p.theme.background};
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1120px;

  padding: 0 4rem;
  line-height: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Strong = styled.strong`
  color: ${(p) => p.theme.textLight};
`;

export const Span = styled.span``;

export const Text = styled.p`
  margin: 0 auto;
  font-weight: 100;
  color: ${(p) => p.theme.text};
  line-height: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  strong {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 1;
  }

  .brand {
    width: fit-content;
    height: 0.875rem;
    display: flex;
    align-items: center;
  }
`;
