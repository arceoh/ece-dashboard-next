import React, { Suspense } from "react";
import Schools from "./Schools";
import Loading from "./loading";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

const SettingsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  const response = await fetch(
    `http://localhost:3000/api/users/${session.user._id}`,
    {
      cache: "force-cache",
      headers: headers(),
    }
  );
  const data = await response.json();
  const schools = data.user.settings.mySchools;

  return (
    <Suspense fallback={<Loading />}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-4">
        <h1>Settings</h1>
        <div>
          <Schools schools={schools} />
        </div>
      </div>
    </Suspense>
  );
};

export default SettingsPage;
