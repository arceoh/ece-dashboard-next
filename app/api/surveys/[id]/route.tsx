import { Survey } from "@/app/_modles/surveyModel";
import { dbConnect } from "@/app/db/dbConnect";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect(process.env.NEXT_PUBLIC_BASE_URL!);
  }
  await dbConnect();
  const survey = await Survey.findById(id);
  return NextResponse.json({ survey });
}
