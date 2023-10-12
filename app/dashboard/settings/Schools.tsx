import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import camelCaseString from "@/utils/camelCaseString";
import UpdateCheckbox from "./UpdateCheckbox";
import { ISchool } from "@/app/_modles/schoolModel";

const Schools = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>You are not authenticated.</div>;
  }

  const response = await fetch(
    `http://localhost:3000/api/users/${session.user._id}`
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
