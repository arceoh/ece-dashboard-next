import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/db/dbConnect";
import { Survey } from "@/app/_modles/surveyModel";

import type { NextApiRequest, NextApiResponse } from "next";

// export async function GET(request: NextRequest) {
//   console.log("REQUEST", request);
//   // console.log("REQUEST URL", request.url);

//   const url = request.url;
//   // const filters =  params.get("name"); // is the string "Jonathan Smith".
//   await dbConnect();
//   const surveys = await Survey.find().limit(5);
//   return NextResponse.json(surveys);
// }

export async function GET(request: NextApiRequest) {
  // console.log("query", request.url);
  // console.log("REQUEST URL", request.url);

  const url = new URL(request.url!);

  const queryParams = url.searchParams;

  console.log(queryParams);

  const cashAide = queryParams.get("cashAide") || "";
  const returning = queryParams.get("returning") || "";
  const iep = queryParams.get("iep") || "";
  const dli = queryParams.get("dli") || "";
  const newStudent = queryParams.get("new") || "";
  const pending = queryParams.get("pending") || "";
  const enrolled = queryParams.get("enrolled") || "";
  const denied = queryParams.get("denied") || "";

  const searchFilters = {
    ...(dli && { "guardian.dliInterest": true }), // If DLI in filters add filter
    ...(returning && {
      "student.isReturningStudent": true, // If "Returning" in filters add filter
    }),
    ...(iep && { "student.enrollInIEP": true }),
    ...(cashAide && { "guardian.cashAid": true }),
    // ...(statusFilter.length > 0 && { status: { $in: statusFilter } }), // If statusFilter has values add filter
    // "guardian.preferedLocation": { $in: schools }, // Filter from users settings.mySchools.active === true
    // ...(searchText.length > 3 && {
    //   $or: [
    //     { "student.firstName": { $regex: new RegExp(searchText, "i") } },
    //     { "student.lastName": { $regex: new RegExp(searchText, "i") } },
    //     { "guardian.firstName": { $regex: new RegExp(searchText, "i") } },
    //     { "guardian.lastName": { $regex: new RegExp(searchText, "i") } },
    //   ],
    // }),
  };

  // const filters =  params.get("name"); // is the string "Jonathan Smith".
  await dbConnect();

  const surveys = await Survey.find({ ...searchFilters }).limit(5);
  return NextResponse.json(surveys);
}
