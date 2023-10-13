import { FC } from "react";
import { z } from "zod";
import { useForm, zodResolver } from "~/modules";
import { contactFormSchema } from "./schema";
import {
  Button,
  Form,
  FormError,
  Info,
  Input,
  Label,
  TextArea,
} from "./styles";

export type ContactFormData = z.infer<typeof contactFormSchema>;

type Props = {
  onSendFormsPree: (data: ContactFormData) => Promise<void>;
};

const ContactForm: FC<Props> = ({ onSendFormsPree }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleSendMessage = async (data: ContactFormData) => {
    await onSendFormsPree(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(handleSendMessage)}>
      <Info>
        <Label htmlFor="name">
          Nome
          <Input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Seu nome..."
          />
          {errors.name && <FormError>{errors.name.message}</FormError>}
        </Label>
        <Label htmlFor="email">
          E-mail
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Informe seu e-mail..."
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </Label>
      </Info>
      <Label htmlFor="message">
        Mensagem
        <TextArea
          id="message"
          {...register("message")}
          placeholder="Escreva sua mensagem..."
        />
        {errors.message && <FormError>{errors.message.message}</FormError>}
      </Label>
      <Button type="submit" disabled={isSubmitting}>
        Enviar
      </Button>
    </Form>
  );
};

export default ContactForm;
