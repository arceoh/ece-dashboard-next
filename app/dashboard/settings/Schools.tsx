import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { updateMySchools } from "./actions";
import camelCaseString from "@/utils/camelize";

const Schools = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Handle the case where there is no session (user is not authenticated)
    return <div>You are not authenticated.</div>;
  }

  const response = await fetch(
    `http://localhost:3000/api/users/${session.user._id}`
  );
  const data = await response.json();
  const schools = data.user.settings.mySchools;

  return (
    <form action={updateMySchools}>
      <input
        type="text"
        name="test"
        className="input input-bordered input-sm w-full max-w-xs"
      />
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-28 lg:grid-cols-3">
        {Object.keys(schools).map((schoolKey) => {
          const school = schools[schoolKey];
          return (
            <div
              key={school._id}
              className="form-control hover:bg-base-200 rounded-md px-2"
            >
              <label htmlFor={school.name} className="label cursor-pointer">
                <span className="label-text">{school.name}</span>
                <input
                  type="checkbox"
                  name={camelCaseString(school.name)}
                  id={school.name}
                  className="checkbox checkbox-accent"
                  // {...register(`${camalize(name)}`)}
                />
              </label>
            </div>
          );
        })}
      </div>
      <button type="submit" className="btn btn-primary float-right mt-4">
        Save Schools
      </button>
    </form>
  );
};

export default Schools;
