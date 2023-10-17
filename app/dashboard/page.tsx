import camelCaseString from "@/utils/camelCaseString";
import ColumnToggleMenu from "./Components/ColumnToggleMenu";
import FilterResetQueryParamsButton from "./Components/FilterResetQueryParamsButton";
import SearchInput from "./Components/SearchInput";
import TableOfSurveys from "./Components/TableOfSurveys";
import ToggleQueryFParamButton from "./Components/ToggleQueryFParamButton";
import { Suspense } from "react";
import DashboardLoadingPage from "./loading";

const filtersList = ["Cash Aid", "IEP", "DLI", "Returning"];
const statusList = ["New", "Pending", "Enrolled", "Denied"];

const DashboardHome = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-4">
        <h1>Dashboard</h1>
        <div className="filters flex justify-between items-center">
          <div className="space-x-4 flex">
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
              <FilterResetQueryParamsButton
                searchParams={searchParams}
                clearFilters={filtersList}
              />
              {filtersList.map((filter) => {
                return (
                  <ToggleQueryFParamButton
                    filterSlug={camelCaseString(filter)}
                    title={filter}
                    searchParams={searchParams}
                  />
                );
              })}
            </div>
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
              <FilterResetQueryParamsButton
                searchParams={searchParams}
                clearFilters={statusList}
              />
              {statusList.map((status) => {
                return (
                  <ToggleQueryFParamButton
                    filterSlug={camelCaseString(status)}
                    title={status}
                    searchParams={searchParams}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <ColumnToggleMenu />
          </div>
          <div>
            <SearchInput />
          </div>
        </div>
      </div>
      <div>
        <Suspense
          fallback={<DashboardLoadingPage searchParams={searchParams} />}
        >
          <TableOfSurveys searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
};

export default DashboardHome;
