import { User } from "@/app/_modles/userModel";
import { dbConnect } from "@/app/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { BASE_URL } from "@/app/config";

interface Props {
  params: { id: string };
}

// export async function GET(request: NextRequest, { params: { id } }: Props) {
export async function GET(request: Request, { params: { id } }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect(BASE_URL);
  }
  await dbConnect();
  const user = await User.findById(id);
  return NextResponse.json(user);
}
