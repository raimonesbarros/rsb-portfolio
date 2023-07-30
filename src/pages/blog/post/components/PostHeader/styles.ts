import { NextLink, styled } from "~/modules"

export const PostHeaderContainer = styled.div`
  background: ${(p) => p.theme.gray300};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  padding: 1rem;
`
export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;

  line-height: 1.3;
  margin-top: 1.25rem;

  color: ${(p) => p.theme.text};
`
export const Span = styled.span``

export const PostHeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;

  font-size: 0.75rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(p) => p.theme.primary};
  }
`
export const PostHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: nowrap;

  @media screen and (width <= 768px) {
    gap: 1rem;
  }
`
export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1;

  img {
    width: 1.15rem;
    height: 1.15rem;
    flex-shrink: 0;
  }

  span {
    flex-grow: 0;
    color: ${(p) => p.theme.text};
  }
`
export const Link = styled(NextLink)``
