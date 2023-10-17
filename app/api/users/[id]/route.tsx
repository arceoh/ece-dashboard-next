import { User } from "@/app/_modles/userModel";
import { dbConnect } from "@/app/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("http://localhost:3000/");
  }
  await dbConnect();
  const user = await User.findById(id);
  return NextResponse.json({ user });
}
