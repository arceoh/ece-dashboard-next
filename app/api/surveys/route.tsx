import { Survey } from "@/app/_modles/surveyModel";
import { dbConnect } from "@/app/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { User } from "../../_modles/userModel";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { BASE_URL } from "@/app/config";
import { getServerSession } from "next-auth/next";

// export async function GET(req: NextRequest) {
export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Auth is required");
    return NextResponse.redirect(BASE_URL);
  }

  await dbConnect();

  const user = await User.findOne({ _id: session.user._id });

  const activeSchools: string[] = [];

  if (user!.settings.mySchools !== undefined) {
    for (const [key, value] of user!.settings.mySchools.entries()) {
      if (value.active) {
        activeSchools.push(value.name);
      }
    }
  }

  const url = new URL(req.url!);

  const queryParams = url.searchParams;
  const currentPage = Number(queryParams.get("page")) || 1; // Current Page
  const pageSize = Number(queryParams.get("pageSize")) || 5; // How many per page

  const cashAid = queryParams.get("cashAid") || false;
  const returning = queryParams.get("returning") || false;
  const iep = queryParams.get("iep") || false;
  const dli = queryParams.get("dli") || false;

  const newStudent = queryParams.get("new") ? "New" : "";
  const pending = queryParams.get("pending") ? "Pending" : "";
  const enrolled = queryParams.get("enrolled") ? "Enrolled" : "";
  const denied = queryParams.get("denied") ? "Denied" : "";

  const searchText = queryParams.get("search") || ""; // Search Student or Guardian First and Last Name
  const statusFilter = [newStudent, pending, enrolled, denied].filter(Boolean); // New, Pending, Enrolled, Denied

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

  await dbConnect();

  const count: number = await Survey.countDocuments({ ...searchFilters });

  const surveys: Survey[] = await Survey.find({ ...searchFilters })
    .limit(pageSize)
    .skip(pageSize * (currentPage - 1));

  return NextResponse.json(
    {
      surveys,
      currentPage,
      pageCount: Math.ceil(count / pageSize),
      pageSize,
    },
    { status: 200 }
  );
}
