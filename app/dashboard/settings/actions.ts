"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );

export async function updateMySchools(prevState: any, formData: FormData) {
  console.log("PREV", prevState);
  console.log("formData", formData);
  //   const schema = z.object({
  //     todo: z.string().min(1),
  //   });
  //   const data = schema.parse({
  //     todo: formData.get("todo"),
  //   });
  //   try {
  //     await sql`
  //     INSERT INTO todos (text)
  //     VALUES (${data.todo})
  //   `;
  //     revalidatePath("/");
  //     return { message: `Added todo ${data.todo}` };
  //   } catch (e) {
  //     return { message: "Failed to create todo" };
  //   }
}
