import { User } from "@/app/_modles/userModel";
import { dbConnect } from "@/app/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { BASE_URL } from "@/app/config";
import { headers } from "next/headers";

type Props = {
  params: { id: string };
};

export async function GET(request: Request, { params: { id } }: Props) {
  const session = await getServerSession(authOptions);

  const headersList = headers();

  if (!session) {
    return NextResponse.redirect(BASE_URL);
  }
  await dbConnect();
  const user = await User.findById(id);
  // return NextResponse.json(user);

  return new NextResponse(JSON.stringify(user), {
    status: 200,
  });
}
