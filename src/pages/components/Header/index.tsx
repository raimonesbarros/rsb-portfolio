import { Link, animateScroll, useRouter, useState } from "~/modules";
import { List, LogoSvg, X } from "~/utils/assets";
import { links } from "./nav-links";
import {
  BtnMenu,
  HeaderContainer,
  HeaderContent,
  Icon,
  LinkTo,
  Navbar,
  Socials,
} from "./styles";

const Header = () => {
  const navigate = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function navigateToPage(local: string) {
    setMenuIsOpen(false);
    navigate.push(local);
    animateScroll.scrollToTop();
  }

  function navigateTo(local: string) {
    setMenuIsOpen(false);
    navigate.push(local);
  }

  return (
    <HeaderContainer $state={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
      <HeaderContent onClick={(e) => e.stopPropagation()}>
        <LinkTo
          href="/"
          onClick={() => navigateToPage("/")}
          aria-label="Ir para o início"
        >
          <LogoSvg alt="as letras R, S, e B cercadas pelos simbolos de menor que e barra maior que" />
        </LinkTo>
        <Navbar $state={menuIsOpen}>
          {links.map(({ href, to, content, label }) => {
            return (
              <Link
                key={label}
                href={href}
                to={to}
                smooth={true}
                offset={-76}
                duration={500}
                onClick={() => navigateTo(`${href}`)}
                aria-label={label}
              >
                {content}
              </Link>
            );
          })}
          <Socials onClick={() => setMenuIsOpen(false)}>
            <LinkTo
              href="https://www.linkedin.com/in/raimones-barros/"
              target="_blank"
              rel="noreferrer"
              aria-label="Ir para perfil de Raimones no Linkedin"
            >
              <Icon
                src="https://icongr.am/devicon/linkedin-plain.svg?size=26&color=45c7af"
                width={26}
                alt="ícone do linkedin"
                title="ícone do Linkedin"
              />
            </LinkTo>
            <LinkTo
              href="https://github.com/raimonesbarros"
              target="_blank"
              rel="noreferrer"
              aria-label="Ir para perfil de Raimones no Github"
            >
              <Icon
                src="https://icongr.am/fontawesome/github.svg?size=26&color=45c7af"
                width={26}
                alt="ícone do github"
                title="ícone do Github"
              />
            </LinkTo>
          </Socials>
        </Navbar>
        <BtnMenu>
          {menuIsOpen ? (
            <X size={50} weight="bold" onClick={() => setMenuIsOpen(false)} />
          ) : (
            <List size={50} weight="bold" onClick={() => setMenuIsOpen(true)} />
          )}
        </BtnMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
