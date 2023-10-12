import TableHeader from "./TableHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SurveyTableRow from "./SurveyTableRow";
import { Survey } from "@/app/entities/Survey";

const TableOfSurveys = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>You are not authenticated.</div>;
  }

  const response = await fetch(`http://localhost:3000/api/surveys`);
  const surveys = await response.json();

  return (
    <div className="overflow-x-auto my-4">
      <table className="table table-zebra">
        <TableHeader />
        <tbody>
          {surveys.map((item: Survey) => {
            return <SurveyTableRow key={item._id} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableOfSurveys;
