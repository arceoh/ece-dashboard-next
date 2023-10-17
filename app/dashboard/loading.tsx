import React from "react";
import TableHeader from "./Components/TableHeader";
import TableRowSkeleton from "./Components/TableRowSkeleton";

const DashboardLoadingPage = () => {
  const count = 5;
  const rows = Array.from(Array(count).keys());

  return (
    <table className="table table-zebra">
      <TableHeader />
      <tbody>
        {rows.map((row) => (
          <TableRowSkeleton key={row} />
        ))}
      </tbody>
    </table>
  );
};

export default DashboardLoadingPage;
