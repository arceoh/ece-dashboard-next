import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/db/dbConnect";
import { Survey } from "@/app/_modles/surveyModel";

export async function GET(request: NextRequest) {
  console.log("REQUEST", request);
  console.log("REQUEST URL", request.url);
  const url = request.url;
  // const filters =  params.get("name"); // is the string "Jonathan Smith".
  await dbConnect();
  const surveys = await Survey.find().limit(5);
  return NextResponse.json(surveys);
}
