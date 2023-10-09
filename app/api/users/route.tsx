import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/db/dbConnect";
import { User } from "../../_modles/userModel";

export async function GET(request: NextRequest) {
  await dbConnect();

  const users = await User.find().limit(10);

  return NextResponse.json({ message: "Hello World", users });
}
