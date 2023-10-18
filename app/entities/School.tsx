import z, { number } from "zod";

export const SchoolDataSchema = z.object({
  _id: z.string(),
  aeriesID: z.string().or(number()).optional(),
  name_full: z.string(),
  name: z.enum([
    "AEOA",
    "Barton",
    "Edison",
    "Franklin",
    "Gauer",
    "Guinn",
    "Henry",
    "Jefferson",
    "Juarez",
    "Lincoln",
    "Loara",
    "Madison",
    "Mann",
    "Marshall",
    "Olive Street",
    "Orange Grove",
    "Ponderosa",
    "Price",
    "Revere",
    "Roosevelt",
    "Ross",
    "Stoddard",
    "Sunkist",
    "Westmont",
  ]),
  active: z.boolean().optional(), // Used for User model settings
});

export type School = z.infer<typeof SchoolDataSchema>;
