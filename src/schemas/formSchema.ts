import { z } from 'zod';

export const accountSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string().min(6, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export const addressSchema = z.object({
  address: z.string().min(1, 'Address is required'),
  apartment: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
  city: z.string().min(1, 'City is required'),
  zipcode: z.string().min(1, 'Zipcode is required'),
  company: z.string().optional(),
  phoneNumber: z.string().min(1, 'Phone Number is required'),
});

export const preferencesSchema = z.object({
  sendNotifications: z.boolean(),
  shareMarketingInfo: z.boolean(),
  notificationPreference: z.enum(['Email', 'Text']),
});

export const formSchema = z.object({
  account: accountSchema,
  address: addressSchema,
  preferences: preferencesSchema,
});
