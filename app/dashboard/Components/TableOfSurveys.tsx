import React from "react";
import TableHeader from "./TableHeader";

const TableOfSurveys = () => {
  return (
    <div className="overflow-x-auto my-4">
      <table className="table table-zebra">
        <TableHeader />
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>

            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Purple</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Blue</td>
            <td>Blue</td>
            <td>Red</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableOfSurveys;
