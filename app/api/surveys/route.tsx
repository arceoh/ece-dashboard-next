import { Survey } from "@/app/_modles/surveyModel";
import { dbConnect } from "@/app/db/dbConnect";
import { NextResponse } from "next/server";
import { User } from "../../_modles/userModel";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import type { NextApiRequest } from "next";

import { getServerSession } from "next-auth/next";

export async function GET(req: NextApiRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/api/auth/signin");
  }

  await dbConnect();

  const user = await User.findOne({ _id: session.user._id });

  const activeSchools: string[] = [];

  if (user!.settings.mySchools !== undefined) {
    for (const [key, value] of user!.settings!.mySchools!.entries()) {
      if (value.active) {
        // @ts-ignore
        activeSchools.push(value.name);
      }
    }
  }

  const url = new URL(req.url!);

  const queryParams = url.searchParams;

  const cashAid = queryParams.get("cashAid") || false;
  const returning = queryParams.get("returning") || false;
  const iep = queryParams.get("iep") || false;
  const dli = queryParams.get("dli") || false;

  const newStudent = queryParams.get("new") ? "New" : "";
  const pending = queryParams.get("pending") ? "Pending" : "";
  const enrolled = queryParams.get("enrolled") ? "Enrolled" : "";
  const denied = queryParams.get("denied") ? "Denied" : "";

  const searchText = queryParams.get("search") || "";

  const statusFilter = [newStudent, pending, enrolled, denied].filter(Boolean);

  const searchFilters = {
    ...(dli && { "guardian.dliInterest": true }), // If DLI in filters add filter
    ...(returning && {
      "student.isReturningStudent": true, // If "Returning" in filters add filter
    }),
    ...(iep && { "student.enrollInIEP": true }),
    ...(cashAid && { "guardian.cashAid": true }),
    ...(statusFilter.length > 0 && { status: { $in: statusFilter } }), // If statusFilter has values add filter
    "guardian.preferedLocation": { $in: activeSchools }, // Filter from users settings.mySchools.active === true
    ...(searchText.length > 3 && {
      $or: [
        { "student.firstName": { $regex: new RegExp(searchText, "i") } },
        { "student.lastName": { $regex: new RegExp(searchText, "i") } },
        { "guardian.firstName": { $regex: new RegExp(searchText, "i") } },
        { "guardian.lastName": { $regex: new RegExp(searchText, "i") } },
      ],
    }),
  };

  // const filters =  params.get("name"); // is the string "Jonathan Smith".
  await dbConnect();

  const surveys = await Survey.find({ ...searchFilters }).limit(5);
  return NextResponse.json(surveys);
}
