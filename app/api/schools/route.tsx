import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/db/dbConnect";
import { School } from "@/app/_modles/schoolModel";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  await dbConnect();

  const schools = await School.find();

  return NextResponse.json(schools);
}
