import z from "zod";

export interface PaginatedSurveys {
  page: number;
  pages: number;
  surveys: Survey[];
}

export const SurveyFormDataSchema = z.object({
  student: z.object({
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().min(1, "Last name is required"),
    birthdate: z.date().or(z.string()),
    enrollInIEP: z.boolean().optional(),
    isReturningStudent: z.boolean().optional(),
  }),
  guardian: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email({ message: "Email Address is Required" }),
    phone: z.string(),
    preferredLanguage: z.string().optional(),
    address_1: z.string(),
    address_2: z.string().optional(),
    city: z.string(),
    state: z.string(),
    zip: z.number(),
    cashAid: z.boolean().optional(),
    familySize: z
      .number()
      .min(1, "Family size must be greater than 0")
      .max(20, "Family size must be less than 20"),
    monthlyIncome: z.number().min(0, "Monthly income must be greater than 0"),
    preferredLocation: z.string(),
    dliInterest: z.boolean().optional(),
  }),
  note: z.string().optional(),
  _id: z.string(),
  status: z.string(),
});

export type Survey = z.infer<typeof SurveyFormDataSchema>;
