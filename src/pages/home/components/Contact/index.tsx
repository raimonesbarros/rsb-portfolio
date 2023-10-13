import { FC, useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import { Subtitle } from "~/pages/components";
import { ContactForm, ContactList } from "./components";
import { ContactFormData } from "./components/ContactForm";
import { ContactContainer, ContactSection, Status } from "./styles";

const Contact: FC = () => {
  const [state, handleSubmit] = useForm("xoqoydra");
  const [success, setSuccess] = useState(false);

  const sendToFormsPree = async (data: ContactFormData) => {
    await handleSubmit(data);
  };

  useEffect(() => {
    setSuccess(state.succeeded);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [state.succeeded]);

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <Subtitle bold="Mensagem" normal="deixe uma" reverse />
        {success && <Status>Mensagem enviada!</Status>}
        <ContactForm onSendFormsPree={sendToFormsPree} />
        <Subtitle bold="Contatos" normal="ou use os" reverse />
        <ContactList />
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
