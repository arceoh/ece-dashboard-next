"use clent";
import { Survey } from "@/app/entities/Survey";
import dayjs from "dayjs";
import Link from "next/link";
import { BsFileEarmarkPostFill, BsFillCheckCircleFill } from "react-icons/bs";
import ColumnTD from "./ColumnTD";
import ColumnToggleView from "./ColumnToggleView";
import SurveyStatus from "./SurveyStatus";

interface Props {
  item: Survey;
}

const SurveyTableRow = ({ item: survey }: Props) => {
  return (
    <tr key={survey._id}>
      <td>
        <p>
          {survey.guardian.firstName} {survey.guardian.lastName}
        </p>
        <p className="text-xs">
          <a
            className="link hover:link-secondary"
            href={`mailto:${survey.guardian.email}`}
            target="_blanck"
          >
            {survey.guardian.email}
          </a>
        </p>
      </td>
      <td className="text-center">
        <SurveyStatus status={survey.status} />
      </td>
      <ColumnToggleView as={"td"} title="Address">
        <ColumnTD>
          <p>{survey.guardian.address_1}</p>
          <p className="text-xs">{survey.guardian.address_2}</p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="City">
        <ColumnTD>
          <p>{survey.guardian.city}</p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="State">
        <ColumnTD>
          <p>{survey.guardian.state}</p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Zip">
        <ColumnTD>
          <p>{survey.guardian.zip}</p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Cash Aid">
        <ColumnTD>
          {survey.guardian.cashAid ? (
            <BsFillCheckCircleFill className="text-xl text-success" />
          ) : null}
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Family Size">
        <ColumnTD>
          <p>{survey.guardian.familySize}</p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Income">
        <ColumnTD>
          <p>{survey.guardian.monthlyIncome}</p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="School Preference">
        <ColumnTD>
          <p>{survey.guardian.preferedLocation}</p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="DLI">
        <ColumnTD>
          <p>
            {survey.guardian.dliInterest ? (
              <BsFillCheckCircleFill className="text-xl text-success" />
            ) : null}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Student">
        <ColumnTD>
          <p>
            {survey.student.firstName} {survey.guardian.lastName}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Birthdate">
        <ColumnTD>
          <p>{dayjs(survey.student.birthdate).format("MMMM D, YYYY")}</p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="IEP">
        <ColumnTD>
          {survey.student.enrollInIEP ? (
            <BsFileEarmarkPostFill className="text-xl text-secondary" />
          ) : null}
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Returning Student">
        <ColumnTD>
          {survey.student.isReturningStudent ? (
            <BsFillCheckCircleFill className="text-xl text-success" />
          ) : null}
        </ColumnTD>
      </ColumnToggleView>
      <td>
        <Link
          className="btn btn-secondary btn-sm"
          href={`/dashboard/${survey._id}`}
        >
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default SurveyTableRow;
