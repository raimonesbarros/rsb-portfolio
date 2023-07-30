import { Link, animateScroll, useRouter, useState } from "~/modules"
import { LogoSvg, X, List } from "~/assets"
import {
  BtnMenu,
  HeaderContainer,
  HeaderContent,
  Icon,
  Navbar,
  Socials,
} from "./styles"

const links = [
  {
    href: "/#",
    to: "showcase",
    content: "INÍCIO",
    label: "ir para o inicio",
  },
  {
    href: "/projects",
    to: "/",
    content: "PROJETOS",
    label: "ir para projetos",
  },
  {
    href: "/blog",
    to: "/",
    content: "BLOG",
    label: "ir para blog",
  },
  {
    href: "/#about",
    to: "about",
    content: "SOBRE",
    label: "ir para sessão sobre",
  },
  {
    href: "/#contact",
    to: "contact",
    content: "CONTATO",
    label: "ir para sessão contatos",
  },
]

const Header = () => {
  const navigate = useRouter()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function navigateToPage(local: string) {
    setMenuIsOpen(false)
    navigate.push(local)
    animateScroll.scrollToTop()
  }

  function navigateTo(local: string) {
    setMenuIsOpen(false)
    navigate.push(local)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link
          href="/"
          to={"/"}
          smooth={true}
          offset={-76}
          duration={500}
          onClick={() => navigateToPage("/")}
          aria-label="Ir para o início"
        >
          <LogoSvg alt="as letras R, S, e B cercadas pelos simbolos de menor que e barra maior que" />
        </Link>
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
            )
          })}
          <Socials onClick={() => setMenuIsOpen(false)}>
            <a
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
            </a>
            <a
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
            </a>
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
  )
}

export default Header
