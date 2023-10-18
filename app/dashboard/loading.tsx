import React from "react";
import TableHeader from "./Components/TableHeader";
import TableRowSkeleton from "./Components/TableRowSkeleton";
import { MdFilterAlt, MdOutlineClear } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import camelCaseString from "@/utils/camelCaseString";

const DashboardLoadingPage = () => {
  const count = 5;
  const rows = Array.from(Array(count).keys());

  const filtersList = ["Cash Aid", "IEP", "DLI", "Returning"];
  const statusList = ["New", "Pending", "Enrolled", "Denied"];

  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-4">
        <h1>Dashboard</h1>
        <div className="filters flex justify-between items-center">
          <div className="space-x-4 flex">
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal animate-pulse">
              <div className="btn btn-xs">
                <MdFilterAlt /> Filter
              </div>
              {filtersList.map((filter) => {
                return (
                  <div key={camelCaseString(filter)} className={`btn btn-xs`}>
                    {filter}
                  </div>
                );
              })}
            </div>
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal animate-pulse">
              <div className="btn btn-xs">
                <MdFilterAlt /> Filter
              </div>
              {statusList.map((status) => {
                return (
                  <div key={camelCaseString(status)} className={`btn btn-xs`}>
                    {status}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="btn btn-xs animate-pulse">
            Columns <AiFillCaretDown />
          </div>
          <div>
            <div className="w-44 h-5 bg-base-200 rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto my-4">
        <table className="table table-zebra">
          <TableHeader />
          <tbody>
            {rows.map((row) => (
              <TableRowSkeleton key={row} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardLoadingPage;
