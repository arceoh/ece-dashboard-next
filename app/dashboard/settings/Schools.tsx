import { School } from "@/app/entities/School";
import UpdateCheckbox from "./UpdateCheckbox";

type SchoolData = {
  [key: string]: School;
};

type Props = {
  schools: SchoolData;
};

const Schools = ({ schools }: Props) => {
  const schoolsArray = Object.values(schools);

  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-x-28 lg:grid-cols-3">
      {schoolsArray.map((school) => {
        return <UpdateCheckbox key={school._id} school={school} />;
      })}
    </div>
  );
};

export default Schools;
