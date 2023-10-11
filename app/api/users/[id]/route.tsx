import { User } from "@/app/_modles/userModel";
import { dbConnect } from "@/app/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  await dbConnect();
  const user = await User.findById(id);
  return NextResponse.json({ user });
}
