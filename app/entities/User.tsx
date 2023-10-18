import z from "zod";
import { SchoolDataSchema } from "./School";
import { School } from "./School";

export const UserSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
  picture: z.string().optional(),
  settings: z.object({
    mySchools: z.map(z.string(), SchoolDataSchema),
    theme: z.enum(["dark", "light"]).optional(),
    columns: z
      .array(
        z.object({
          title: z.string(),
          value: z.boolean().optional(),
        })
      )
      .optional(),
  }),
});

export type User = z.infer<typeof UserSchema>;
