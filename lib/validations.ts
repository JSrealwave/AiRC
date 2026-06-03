import { z } from "zod";

export const contactFormSchema = z.object({
  formType: z.enum(["quote", "partnership", "integration"]),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid work email required"),
  company: z.string().min(2, "Company is required"),
  role: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide context for your inquiry"),
  productInterest: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
