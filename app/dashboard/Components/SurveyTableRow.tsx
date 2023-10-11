"use client";
import { BsFillCheckCircleFill, BsFileEarmarkPostFill } from "react-icons/bs";
import { RiFileEditFill } from "react-icons/ri";
import ColumnToggleView from "./ColumnToggleView";
import dayjs from "dayjs";
// import ModalEditSurvey from "./ModalEditSurvey";
import { useState } from "react";
import ColumnTD from "./ColumnTD";
import SurveyStatus from "./SurveyStatus";
import { Survey } from "@/app/entities/Survey";

interface Props {
  item: Survey;
}

const SurveyTableRow = ({ item }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <tr key={item._id} className="dark:hover:bg-gray-800 hover:bg-slate-100 ">
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <h2 className="font-medium text-gray-800 dark:text-white ">
          {item.guardian.firstName} {item.guardian.lastName}
        </h2>
        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
          {item.guardian.email}
        </p>
      </td>
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-center">
        <SurveyStatus status={item.status} />
      </td>
      <ColumnToggleView as={"td"} title="Address">
        <ColumnTD>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            {item.guardian.address_1}
          </p>
          <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
            {item.guardian.address_2}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="City">
        <ColumnTD>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            {item.guardian.city}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="State">
        <ColumnTD>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            {item.guardian.state}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Zip">
        <ColumnTD>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            {item.guardian.zip}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Cash Aid">
        <ColumnTD>
          {item.guardian.cashAid ? (
            <BsFillCheckCircleFill className="mx-auto text-xl dark:text-green-600" />
          ) : null}
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Family Size">
        <ColumnTD>
          <p className="text-base font-medium text-gray-600 dark:text-gray-400">
            {item.guardian.familySize}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Income">
        <ColumnTD>
          <p className="text-base font-medium text-gray-600 dark:text-gray-400">
            {item.guardian.monthlyIncome}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="School Preference">
        <ColumnTD>
          <p className="text-base font-medium text-gray-600 dark:text-gray-400">
            {item.guardian.preferedLocation}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="DLI">
        <ColumnTD>
          <p className="text-base font-medium text-gray-600 dark:text-gray-400">
            {item.guardian.dliInterest ? (
              <BsFillCheckCircleFill className="mx-auto text-xl dark:text-green-600" />
            ) : null}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Student">
        <ColumnTD>
          <p className="text-gray-700 dark:text-gray-200">
            {item.student.firstName} {item.guardian.lastName}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Birthdate">
        <ColumnTD>
          <p className="text-gray-500 dark:text-gray-400">
            {dayjs(item.student.birthdate).format("MMMM D, YYYY")}
          </p>
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="IEP">
        <ColumnTD>
          {item.student.enrollInIEP ? (
            <BsFileEarmarkPostFill className="mx-auto text-xl dark:text-gray-400" />
          ) : null}
        </ColumnTD>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Returning Student">
        <ColumnTD>
          {item.student.isReturningStudent ? (
            <BsFillCheckCircleFill className="mx-auto text-xl dark:text-green-600" />
          ) : null}
        </ColumnTD>
      </ColumnToggleView>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <button
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <RiFileEditFill
            className={
              "dark:text-gray-400 text-gray-500 text-3xl hover:text-blue-800  hover:scale-110 hover:dark:text-white cursor-pointer"
            }
          />
        </button>
        {/* <ModalEditSurvey
          key={item._id}
          display={showModal}
          data={item}
          id={item._id}
          onClose={() => setShowModal(false)}
        /> */}
      </td>
    </tr>
  );
};

export default SurveyTableRow;
