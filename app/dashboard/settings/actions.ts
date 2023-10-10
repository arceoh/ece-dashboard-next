"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export async function updateMySchools(formData: FormData) {
  const session = await getServerSession(authOptions);

  // console.log("USERID: ", session!.user._id);

  console.log("------⌄⌄⌄FORM DATA⌄⌄⌄------\n");
  console.log("formData: ", formData);
  console.log("----^^^FORM DATA^^--------\n");

  // / Convert FormData to a regular JavaScript object
  const formDataObject: Record<string, string | File> = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  console.log("FORMDATA OBJECT: ", formDataObject);

  await fetch(`http://localhost:3000/api/users/${session!.user._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  // Use fetch to update user schools

  // Clear cache
  // revalidatePath("/");
}
