import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import UpdateCheckbox from "./UpdateCheckbox";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

const Schools = async () => {
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
    <div className="sm:grid sm:grid-cols-2 sm:gap-x-28 lg:grid-cols-3">
      {Object.keys(schools).map((schoolKey) => {
        const school = schools[schoolKey];
        return <UpdateCheckbox school={school} />;
      })}
    </div>
  );
};

export default Schools;
