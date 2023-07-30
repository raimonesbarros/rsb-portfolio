import { styled } from "~/modules"

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  margin: 0 auto;

  width: 100%;
  height: 4.75rem;

  display: flex;
  justify-content: center;

  background: ${(p) => p.theme.background};
  z-index: 99;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  position: relative;

  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 7.8rem;
  }

  @media screen and (width > 768px) {
    > div {
      display: none;
    }
  }
`

interface NavbarProps {
  $state: boolean
}

export const Navbar = styled.nav<NavbarProps>`
  @keyframes appearMenu {
    from {
      opacity: 0;
      margin-top: -1rem;
    }
    to {
      opacity: 1;
    }
  }
  animation: appearMenu 0.5s normal;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-transform: uppercase;
  font-weight: 700;
  line-height: 100%;

  background: ${(p) => p.theme.background};

  a:not(:has(img)) {
    display: flex;
    align-items: center;
    line-height: 100%;

    font-size: 1.2rem;
    padding: 0.3rem 0.5rem;
    border-bottom-right-radius: 8px;

    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid ${(p) => p.theme.primary};
      border-right: 2px solid ${(p) => p.theme.primary};
      transition: 4ms;
    }
  }

  @media screen and (width > 768px) {
    display: flex;
  }
  @media screen and (width <= 768px) {
    display: ${(p) => (p.$state ? "flex" : "none")};
    width: 100%;
    position: absolute;
    left: 0;
    top: 4.75rem;
    flex-direction: column;
    padding: 1.2rem 0;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 2px 3px ${(p) => p.theme.gray300};
    background-image: linear-gradient(
      to bottom,
      ${(p) => p.theme.background} 60%,
      ${(p) => p.theme.gray100}
    );
  }
`
export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 100%;

  cursor: pointer;

  a svg {
    color: ${(p) => p.theme.text};
  }

  @media screen and (width <= 768px) {
    margin-top: 0.5rem;
  }
`
export const BtnMenu = styled.div`
  color: ${(p) => p.theme.primary};
`

export const Icon = styled.img``
