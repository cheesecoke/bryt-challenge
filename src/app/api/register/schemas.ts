import { z } from "zod";
import { zfd } from "zod-form-data";

const passwordRegex = /^[\w&.\-]*$/;

export const formJsonSchema = z
  .object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email(),
    username: z.string(),
    password: z.string().min(10).regex(passwordRegex),
    confirmPassword: z.string().regex(passwordRegex),
    address1: z.string(),
    address2: z.string().optional(),
    country: z.enum(["US"]),
    city: z.string(),
    zipCode: z.string().regex(/(^\d{5}$)|(^\d{5}-\d{4}$)/),
    company: z.string().optional(),
    phoneNumber: z
      .string()
      .regex(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,14}$/g),
    wantsNotifications: z.enum(["Yes", "No"]).default("No"),
    shareInformation: z.enum(["Yes", "No"]).default("No"),
    notificationPreferences: z.enum(["Email", "Text"]).optional(),
  })
  .refine((data) => {
    return data.password === data.confirmPassword;
  }, "Your passwords do not match. Please try again.");

export const formDataSchema = zfd
  .formData({
    firstName: zfd.text(z.string().optional()),
    lastName: zfd.text(z.string().optional()),
    email: zfd.text(z.string().email()),
    username: zfd.text(z.string()),
    password: zfd.text(z.string().min(10).regex(passwordRegex)),
    confirmPassword: zfd.text(z.string().regex(passwordRegex)),
    address1: zfd.text(z.string()),
    address2: zfd.text(z.string().optional()),
    country: zfd.text(z.enum(["US"])),
    city: zfd.text(z.string()),
    zipCode: zfd.text(z.string().regex(/(^\d{5}$)|(^\d{5}-\d{4}$)/)),
    company: zfd.text(z.string().optional()),
    phoneNumber: zfd.text(
      z.string().regex(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,14}$/g)
    ),
    wantsNotifications: zfd.checkbox({ trueValue: "Yes" }),
    shareInformation: zfd.checkbox({ trueValue: "Yes" }),
    notificationPreferences: zfd.text(z.enum(["Email", "Text"]).optional()),
  })
  .refine((data) => {
    return data.password === data.confirmPassword;
  }, "Your passwords do not match. Please try again.");;

export type RegisterFormData = z.infer<typeof formDataSchema>;
export type RegisterFormJson = z.infer<typeof formJsonSchema>;