import React from "react";
import TableHeader from "./Components/TableHeader";
import TableRowSkeleton from "./Components/TableRowSkeleton";
import { MdFilterAlt, MdOutlineClear } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import camelCaseString from "@/utils/camelCaseString";
import Container from "../components/Container";

const DashboardLoadingPage = () => {
  const count = 5;
  const rows = Array.from(Array(count).keys());

  const filtersList = ["Cash Aid", "IEP", "DLI", "Returning"];
  const statusList = ["New", "Pending", "Enrolled", "Denied"];

  return (
    <>
      <Container>
        <h1>Dashboard</h1>
        <div className="flex justify-start flex-wrap items-center sm:justify-between space-y-2 xl:space-y-0">
          <div className="btn-group btn-group-horizontal mr-4 animate-pulse">
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
          <div className="btn-group btn-group-horizontal animate-pulse">
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
          <div className="btn btn-xs animate-pulse mr-2">
            Columns <AiFillCaretDown />
          </div>
          <div>
            <div className="w-44 h-5 bg-base-200 rounded-md"></div>
          </div>
        </div>
      </Container>
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
