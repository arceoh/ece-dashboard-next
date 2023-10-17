import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/db/dbConnect";
import { School } from "@/app/_modles/schoolModel";

export async function GET(request: NextRequest) {
  await dbConnect();

  const schools = await School.find();

  return NextResponse.json(schools);
}
