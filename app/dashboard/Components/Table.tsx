import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Guardian</th>
            <th>Status</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Cash Aid</th>
            <th>Income</th>
            <th>Birthdate</th>
            <th>IEP</th>
            <th>Returning</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
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
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
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
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
