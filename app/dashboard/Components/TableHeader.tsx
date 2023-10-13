import { BsTranslate } from "react-icons/bs";
import { FaSchool, FaChild } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import ColumnToggleView from "./ColumnToggleView";

const TableHeader = () => {
  return (
    <thead className="border-b-2 border-t-2">
      <tr>
        <th align="center" scope="col">
          Guardian
        </th>
        <th align="center" scope="col">
          Status
        </th>
        <ColumnToggleView as={"th"} title="Address">
          Address
        </ColumnToggleView>
        <ColumnToggleView as={"th"} title="City">
          City
        </ColumnToggleView>
        <ColumnToggleView as={"th"} title="State">
          State
        </ColumnToggleView>
        <ColumnToggleView as={"th"} title="Zip">
          Zip
        </ColumnToggleView>
        <ColumnToggleView as={"th"} title="Cash Aid">
          Cash Aid
        </ColumnToggleView>
        <ColumnToggleView as={"th"} title="Family Size">
          <MdFamilyRestroom className={"text-3xl block mx-auto"} />
        </ColumnToggleView>
        <ColumnToggleView as={"th"} title="Income">
          {/* <FaDollarSign /><br />Income */}
          Income
        </ColumnToggleView>
        <ColumnToggleView as={"th"} title="School Preference">
          <FaSchool className={"text-2xl block mx-auto"} />
        </ColumnToggleView>
        <ColumnToggleView as={"th"} title="DLI">
          <BsTranslate className={"text-2xl block mx-auto"} />
        </ColumnToggleView>
        <ColumnToggleView as={"th"} title="Student">
          <FaChild className={"text-3xl block mx-auto"} />
        </ColumnToggleView>
        <ColumnToggleView as={"th"} title="Birthdate">
          Birthdate
        </ColumnToggleView>
        <ColumnToggleView as={"th"} title="IEP">
          IEP
        </ColumnToggleView>
        <ColumnToggleView as={"th"} title="Returning Student">
          Returning
        </ColumnToggleView>
        <th scope="col" align="center">
          Edit
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
