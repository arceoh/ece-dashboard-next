import React, { Suspense } from "react";
import Schools from "./Schools";
import Loading from "./loading";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { School } from "@/app/entities/School";
import { BASE_URL } from "@/app/config";

type SchoolData = {
  [key: string]: School;
};

const SettingsPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect(BASE_URL);
  }

  const headersInstance = new Headers(headers());

  const response = await fetch(`${BASE_URL}/api/users/${session.user._id}`, {
    cache: "reload",
    headers: headersInstance,
  });
  const user = await response.json();
  const schools: SchoolData = user.settings.mySchools;

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
