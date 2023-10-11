"use server";
import { User } from "@/app/_modles/userModel";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { dbConnect } from "@/app/db/dbConnect";
import camelCaseString from "@/utils/camelize";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

interface School {
  name: string;
  _id: string;
  active: boolean;
}

export async function updateSchool(school: School) {
  const session = await getServerSession(authOptions);

  const userId = session!.user._id;
  const schoolKey = camelCaseString(school.name);

  await dbConnect();
  const user = await User.findById(session!.user._id);

  if (!user) return;

  await user.settings.mySchools.set(schoolKey, {
    ...school,
    active: !school.active,
  });
  await user.save();

  revalidatePath("/dashboard/settings");
}
