import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "campo obrigatório"),
  email: z.string().email("use um e-mail válido"),
  message: z.string().min(10, "deve conter no mínimo 8 caracteres"),
});
