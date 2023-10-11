import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/db/dbConnect";
import { Survey } from "@/app/_modles/surveyModel";

export async function GET(request: NextRequest) {
  await dbConnect();
  const surveys = await Survey.find().limit(10);
  return NextResponse.json({ message: "Hello World", surveys });
}
