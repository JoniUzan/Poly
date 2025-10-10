import { z } from "zod";

export const createContactSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-()]+$/, "Invalid phone format")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .min(1, "Company cannot be empty")
    .optional()
    .or(z.literal("")),
});

export const updateContactSchema = createContactSchema.partial();

export type CreateContactInput = z.infer<typeof createContactSchema>;
export type UpdateContactInput = z.infer<typeof updateContactSchema>;
