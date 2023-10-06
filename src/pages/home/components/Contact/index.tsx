import { FC } from "react";
import { Subtitle } from "~/pages/components";
import {
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "~/utils/assets";
import {
  ContactCard,
  ContactContainer,
  ContactSection,
  ContactsList,
  Link,
  Strong,
  Text,
} from "./styles";

const Contact: FC = () => (
  <ContactSection id="contact">
    <ContactContainer>
      <Subtitle bold="Contatos" normal="meus" reverse />
      <ContactsList>
        <ContactCard>
          <Link href="https://wa.link/vr2jtk">
            <WhatsappLogo size={50} weight="thin" />
            <Strong>WhatsApp</Strong>
            <Text>63 9 9230-4536</Text>
          </Link>
        </ContactCard>
        <ContactCard>
          <Link href="mailto:raimonesrg3@gmail.com">
            <EnvelopeSimple size={50} weight="thin" />
            <Strong>Gmail</Strong>
            <Text>raimonesrg3</Text>
          </Link>
        </ContactCard>
        <ContactCard>
          <Link href="https://www.linkedin.com/in/raimones-barros/">
            <LinkedinLogo size={50} weight="thin" />
            <Strong>Linkedin</Strong>
            <Text>raimones-barros</Text>
          </Link>
        </ContactCard>
        <ContactCard>
          <Link href="https://www.instagram.com/silvabarross/">
            <InstagramLogo size={50} weight="thin" />
            <Strong>Instagram</Strong>
            <Text>@silvabarross</Text>
          </Link>
        </ContactCard>
      </ContactsList>
    </ContactContainer>
  </ContactSection>
);

export default Contact;
