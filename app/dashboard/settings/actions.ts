"use server";
import { User } from "@/app/_modles/userModel";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { dbConnect } from "@/app/db/dbConnect";
import { School } from "@/app/entities/School";
import camelCaseString from "@/utils/camelCaseString";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export async function updateSchool(school: School) {
  const session = await getServerSession(authOptions);
  const schoolKey = camelCaseString(school.name);

  await dbConnect();
  const user = await User.findById(session!.user._id);

  if (!user) return;

  try {
    const schoolToUpdate = user.settings.mySchools.get(schoolKey);
    if (schoolToUpdate) {
      schoolToUpdate.active = !schoolToUpdate.active;
      await user.save();

      console.log("User -> Settings -> mySchools: Updated Successfully.");
    } else {
      console.error(
        "School not found when updating: User -> Settings -> mySchools "
      );
    }
  } catch (error) {
    console.error(
      "An error occurred when updating: User -> Settings -> mySchools \n Error: \n",
      error
    );
  }
  revalidatePath(`${process.env.NEXT_PUBLIC_BASE_URL!}/dashboard/settings`);
}

export async function toggleAllSchools(schools: School[]) {
  const session = await getServerSession(authOptions);

  const userId = session!.user._id;

  // TODO: Check if all checked or unchecked
  const someChecked = schools.some((school) => school.active === true);

  if (someChecked) {
    schools.forEach((school) => (school.active = false));
  } else {
    schools.forEach((school) => (school.active = true));
  }

  revalidatePath("/dashboard/settings");
}
