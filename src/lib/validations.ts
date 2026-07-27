import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Enter a valid email address'),
  location: z.string().min(1, 'Select your location'),
  loanOrReferral: z.string().min(1, 'Select an option'),
  loanRequirements: z.string().min(1, 'Select your loan requirement'),
  loanType: z.string().min(1, 'Select a loan type'),
  cibilScore: z.string().min(1, 'Select your CIBIL score'),
  privacyConsent: z.literal(true, 'You must agree to continue'),
  termsConsent: z.literal(true, 'You must agree to continue'),
});

export type FormValues = z.infer<typeof formSchema>;

export const submitFieldsSchema = formSchema.omit({
  privacyConsent: true,
  termsConsent: true,
});
