import { School } from "@/app/entities/School";
import UpdateCheckbox from "./UpdateCheckbox";

interface Props {
  schools: School[];
}

const Schools = ({ schools }: Props) => {
  const schoolsArray = Object.values(schools);

  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-x-28 lg:grid-cols-3">
      {schoolsArray.map((school) => {
        return <UpdateCheckbox school={school} />;
      })}
    </div>
  );
};

export default Schools;
