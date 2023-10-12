import { Survey } from "@/app/entities/Survey";
import dayjs from "dayjs";
import Link from "next/link";
import { BsFileEarmarkPostFill, BsFillCheckCircleFill } from "react-icons/bs";
import { RiFileEditFill } from "react-icons/ri";
import ColumnTD from "./ColumnTD";
import ColumnToggleView from "./ColumnToggleView";
import SurveyStatus from "./SurveyStatus";

interface Props {
  item: Survey;
}

const SurveyTableRow = ({ item: survey }: Props) => {
  return (
    <tr key={survey._id} className="dark:hover:bg-gray-800 hover:bg-slate-100 ">
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <p>
          {survey.guardian.firstName} {survey.guardian.lastName}
        </p>
        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
          {survey.guardian.email}
        </p>
      </td>
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-center">
        <SurveyStatus status={survey.status} />
      </td>
      <ColumnToggleView as={"td"} title="Address">
        <ColumnTD>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            {survey.guardian.address_1}
          </p>
          <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
            {survey.guardian.address_2}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="City">
        <ColumnTD>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            {survey.guardian.city}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="State">
        <ColumnTD>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            {survey.guardian.state}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Zip">
        <ColumnTD>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            {survey.guardian.zip}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Cash Aid">
        <ColumnTD>
          {survey.guardian.cashAid ? (
            <BsFillCheckCircleFill className="mx-auto text-xl dark:text-green-600" />
          ) : null}
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Family Size">
        <ColumnTD>
          <p className="text-base font-medium text-gray-600 dark:text-gray-400">
            {survey.guardian.familySize}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Income">
        <ColumnTD>
          <p className="text-base font-medium text-gray-600 dark:text-gray-400">
            {survey.guardian.monthlyIncome}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="School Preference">
        <ColumnTD>
          <p className="text-base font-medium text-gray-600 dark:text-gray-400">
            {survey.guardian.preferedLocation}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="DLI">
        <ColumnTD>
          <p className="text-base font-medium text-gray-600 dark:text-gray-400">
            {survey.guardian.dliInterest ? (
              <BsFillCheckCircleFill className="mx-auto text-xl dark:text-green-600" />
            ) : null}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Student">
        <ColumnTD>
          <p className="text-gray-700 dark:text-gray-200">
            {survey.student.firstName} {survey.guardian.lastName}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Birthdate">
        <ColumnTD>
          <p className="text-gray-500 dark:text-gray-400">
            {dayjs(survey.student.birthdate).format("MMMM D, YYYY")}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="IEP">
        <ColumnTD>
          {survey.student.enrollInIEP ? (
            <BsFileEarmarkPostFill className="mx-auto text-xl dark:text-gray-400" />
          ) : null}
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Returning Student">
        <ColumnTD>
          {survey.student.isReturningStudent ? (
            <BsFillCheckCircleFill className="mx-auto text-xl dark:text-green-600" />
          ) : null}
        </ColumnTD>
      </ColumnToggleView>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <Link href={`/dashboard/${survey._id}`}>
          <RiFileEditFill
            className={
              "text-primary text-3xl hover:text-primary  hover:scale-110 hover:base-100 cursor-pointer"
            }
          />
          <span className="sr-only">
            Edit Survey for {survey.student.firstName} {survey.student.lastName}
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default SurveyTableRow;
