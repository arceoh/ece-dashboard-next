import camelCaseString from "@/utils/camelCaseString";
import ColumnToggleMenu from "./Components/ColumnToggleMenu";
import FilterResetQueryParamsButton from "./Components/FilterResetQueryParamsButton";
import SearchInput from "./Components/SearchInput";
import TableOfSurveys from "./Components/TableOfSurveys";
import ToggleQueryFParamButton from "./Components/ToggleQueryFParamButton";
import Container from "@/app/components/Container";

const filtersList = ["Cash Aid", "IEP", "DLI", "Returning"];
const statusList = ["New", "Pending", "Enrolled", "Denied"];

const DashboardHome = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <>
      <Container>
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
      </Container>
      <div>
        <TableOfSurveys searchParams={searchParams} />
      </div>
    </>
  );
};

export default DashboardHome;
