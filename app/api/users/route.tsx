import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/db/dbConnect";
import { User } from "../../_modles/userModel";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("http://localhost:3000/");
  }
  await dbConnect();

  const users = await User.find().limit(10);

  return NextResponse.json({ message: "Hello World", users });
}
