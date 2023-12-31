import { keyframes, styled } from "~/modules";
import { LogoSvg } from "~/utils";

const appearMenu = keyframes({
  "0%": { opacity: 0, marginTop: "-1rem" },
  "100%": { opacity: 1 },
});

type NavbarProps = {
  $state?: boolean;
};

export const HeaderContainer = styled.header<NavbarProps>`
  position: fixed;
  top: 0;

  width: 100%;
  height: ${(props) => (props.$state ? "100vh" : "4.75rem")};

  margin: 0 auto;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  background: ${(props) =>
    props.$state ? props.theme.shade : props.theme.background};
  z-index: 99;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 4.75rem;
  position: relative;

  padding: 0 2rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.background};

  @media screen and (width <= 768px) {
    > a {
      margin-top: 1rem;
    }
  }

  @media screen and (width > 768px) {
    > button {
      display: none;
    }
  }
`;

export const LinkTo = styled.a``;

export const Logo = styled(LogoSvg)`
  cursor: pointer;
`;

export const Navbar = styled.nav<NavbarProps>`
  animation: ${appearMenu} 0.5s normal;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-transform: uppercase;
  font-weight: 700;
  font-family: "Roboto";
  line-height: 100%;

  background: ${(p) => p.theme.background};

  a:not(:has(img)) {
    display: flex;
    line-height: 140%;
    margin-top: 0.2rem;

    font-size: 1.2rem;
    padding: 0 0.5rem;
    color: ${(p) => p.theme.textLight};
    border-bottom-right-radius: 8px;

    border: 2px solid transparent;
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
    box-shadow: 0 2px 3px ${(p) => p.theme.backgroundLight};
    background-color: ${(p) => p.theme.background};
  }
`;
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
`;

export const BtnMenu = styled.button`
  all: unset;
  margin-top: 1rem;
  color: ${(p) => p.theme.primary};

  cursor: pointer;
`;

export const Icon = styled.img.attrs({ width: 26 })``;
