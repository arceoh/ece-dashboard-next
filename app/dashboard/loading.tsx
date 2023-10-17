"use client";
import React from "react";
import TableHeader from "./Components/TableHeader";
import TableRowSkeleton from "./Components/TableRowSkeleton";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const DashboardLoadingPage = ({ searchParams }: Props) => {
  const count = searchParams?.pageSize ? searchParams.pageSize : 5;

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
