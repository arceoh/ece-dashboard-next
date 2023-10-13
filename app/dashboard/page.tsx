import Link from "next/link";
import ColumnToggleMenu from "./Components/ColumnToggleMenu";
import FilterSwitchButton from "./Components/FilterSwitchButton";
import FiltersResetButton from "./Components/FiltersResetButton";
import SearchInput from "./Components/SearchInput";
import StatusResetButton from "./Components/StatusResetButton";
import StatusSwitchButton from "./Components/StatusSwitchButton";
import TableOfSurveys from "./Components/TableOfSurveys";
import ToggleQueryFParamButton from "./Components/ToggleQueryFParamButton";
import FilterResetQueryParamsButton from "./Components/FilterResetQueryParamsButton";
import camelCaseString from "@/utils/camelCaseString";

const filtersList = ["Cash Aid", "IEP", "DLI", "Returning"];
const statusList = ["New", "Pending", "Enrolled", "Denied"];

const DashboardHome = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const filters = { ...searchParams };

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
              {/* <ToggleQueryFParamButton
                filterSlug="cashAid"
                title="Cash Aid"
                searchParams={searchParams}
              />
              <br />
              <ToggleQueryFParamButton
                filterSlug="iep"
                title="IEP"
                searchParams={searchParams}
              />
              <ToggleQueryFParamButton
                filterSlug="dli"
                title="DLI"
                searchParams={searchParams}
              />
              <ToggleQueryFParamButton
                filterSlug="returning"
                title="Returning"
                searchParams={searchParams}
              /> */}
              {/*
              <FiltersResetButton />
              <FilterSwitchButton title="Cash Aid" filterSlug="cashAid" />
              <FilterSwitchButton title="IEP" filterSlug="IEP" />
              <FilterSwitchButton title="DLI" filterSlug="DLI" />
              <FilterSwitchButton title="Returning" filterSlug="Returning" /> */}
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
              {/* <ToggleQueryFParamButton
                filterSlug="new"
                title="New"
                searchParams={searchParams}
              />
              <ToggleQueryFParamButton
                filterSlug="pending"
                title="Pending"
                searchParams={searchParams}
              />
              <ToggleQueryFParamButton
                filterSlug="enrolled"
                title="Enrolled"
                searchParams={searchParams}
              />
              <ToggleQueryFParamButton
                filterSlug="denied"
                title="Denied"
                searchParams={searchParams}
              /> */}
              {/*
              <StatusResetButton />
              <StatusSwitchButton title="New" StatusSlug="New" />
              <StatusSwitchButton title="Pending" StatusSlug="Pending" />
              <StatusSwitchButton title="Enrolled" StatusSlug="Enrolled" />
              <StatusSwitchButton title="Denied" StatusSlug="Denied" /> */}
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
        <TableOfSurveys />
      </div>
    </>
  );
};

export default DashboardHome;
