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

export async function PATCH(request: NextRequest, { params: { id } }: Props) {
  console.log("------⌄⌄⌄⌄⌄⌄------\n");
  const requestBody = await request.json();
  console.log("REQUEST BODY:", requestBody);
  console.log("----^^^^^--------\n");

  await dbConnect();

  const user = await User.findById(id);
  // console.log("POST USER: ", user);

  // return NextResponse.json({ user });
  return NextResponse.json({ messege: "ALL DONE" });
}
