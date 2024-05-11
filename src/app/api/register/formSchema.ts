import { z } from "zod";

const passwordRegex = /^[\w&.\-]*$/;

export const accountSchema = z
  .object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email(),
    username: z.string(),
    password: z.string().min(10).regex(passwordRegex),
    confirmPassword: z.string().regex(passwordRegex),
  })
  .refine((data) => {
    return data.password === data.confirmPassword;
  });

export const addressSchema = z.object({
  address1: z.string(),
  address2: z.string().optional(),
  country: z.enum(["US"]),
  city: z.string(),
  zipCode: z.string().regex(/(^\d{5}$)|(^\d{5}-\d{4}$)/),
  company: z.string().optional(),
  phoneNumber: z
    .string()
    .regex(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,14}$/g),
});

export const preferencesSchema = z.object({
  wantsNotifications: z.enum(["Yes", "No"]).default("No"),
  shareInformation: z.enum(["Yes", "No"]).default("No"),
  notificationPreferences: z.enum(["Email", "Text"]).optional(),
});
