import { Span, Strong, Title } from "../../styles"
import {
  WhatsappLogo,
  EnvelopeSimple,
  LinkedinLogo,
  InstagramLogo,
} from "~/assets"
import {
  ContactCard,
  ContactContainer,
  ContactSection,
  ContactsList,
  Link,
  Text,
} from "./styles"

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <Title>
          <Span>entre em</Span> <Strong>Contato</Strong> <Span>comigo</Span>
        </Title>
        <ContactsList>
          <ContactCard title="WhatsApp">
            <Link href="https://wa.link/vr2jtk">
              <WhatsappLogo size={50} weight="thin" />
              <Text>63 9 9230-4536</Text>
            </Link>
          </ContactCard>
          <ContactCard title="Email">
            <Link href="mailto:raimonesrg3@gmail.com">
              <EnvelopeSimple size={50} weight="thin" />
              <Text>raimonesrg3</Text>
            </Link>
          </ContactCard>
          <ContactCard title="Linkedin">
            <Link href="https://www.linkedin.com/in/raimones-barros-b6577492/">
              <LinkedinLogo size={50} weight="thin" />
              <Text>Raimones Barros</Text>
            </Link>
          </ContactCard>
          <ContactCard title="Instagram">
            <Link href="https://www.instagram.com/silvabarross/">
              <InstagramLogo size={50} weight="thin" />
              <Text>@silvabarross</Text>
            </Link>
          </ContactCard>
        </ContactsList>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact
