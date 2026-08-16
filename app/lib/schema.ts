import { z } from "zod/v4";

export const contactSchema = z.object({
  fullname: z
    .string({
      message: "Full name is required",
    })
    .min(3, {
      message: "Full name must be at least 3 characters long",
    }),
  email: z.email({
    message: "Email is required",
  }),
  phone: z
    .string({
      message: "Phone is required",
    })
    .refine(
      (num) => /^\+\d{10,15}$/.test(num),
      "Phone number must start with a + and contain 10-15 digits",
    )
    .optional(),
  message: z
    .string({
      message: "Message is required",
    })
    .min(10, {
      message: "At least 10 characters is needed",
    })
    .max(200, {
      message: "Message cannot be greater than 200 characters",
    }),
});
