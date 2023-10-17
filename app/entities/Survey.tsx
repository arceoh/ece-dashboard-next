import z from "zod";

export interface PaginatedSurveys {
  page: number;
  pages: number;
  surveys: Survey[];
}

export const SurveyFormDataSchema = z.object({
  student: z.object({
    firstName: z.string(),
    middleName: z.string().optional(),
    lastName: z.string(),
    birthdate: z.string(),
    enrollInIEP: z.boolean().optional(),
    isReturningStudent: z.boolean().optional(),
  }),
  guardian: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    preferedLanguage: z.string(),
    address_1: z.string(),
    address_2: z.string().optional(),
    city: z.string(),
    state: z.string(),
    zip: z.number(),
    cashAid: z.boolean().optional(),
    familySize: z.number(),
    monthlyIncome: z.number(),
    preferedLocation: z.string(),
    dliInterest: z.boolean().optional(),
  }),
  note: z.string().optional(),
  _id: z.string(),
  status: z.string(),
});

export type Survey = z.infer<typeof SurveyFormDataSchema>;
