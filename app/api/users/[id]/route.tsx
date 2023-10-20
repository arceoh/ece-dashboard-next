import { User } from "@/app/_modles/userModel";
import { dbConnect } from "@/app/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { BASE_URL } from "@/app/config";
import { NextApiRequest } from "next";
import { headers } from "next/headers";

interface Props {
  params: { id: string };
}

// export async function GET(request: NextRequest, { params: { id } }: Props) {
// export async function GET(request: Request, { params: { id } }: Props) {
export async function GET(request: NextApiRequest, { params: { id } }: Props) {
  const session = await getServerSession(authOptions);

  const headersList = headers();
  const referer = headersList.get("referer");

  if (!session) {
    return NextResponse.redirect(BASE_URL);
  }
  await dbConnect();
  const user = await User.findById(id);
  // return NextResponse.json(user);

  return new Response(JSON.stringify(user), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
