import Container from "@/app/components/Container";
import camelCaseString from "@/utils/camelCaseString";
import { School } from "../entities/School";
import ColumnToggleMenu from "./Components/ColumnToggleMenu";
import ErrorNoSchoolsFound from "./Components/ErrorNoSchoolsFound";
import FilterResetQueryParamsButton from "./Components/FilterResetQueryParamsButton";
import SearchInput from "./Components/SearchInput";
import TableOfSurveys from "./Components/TableOfSurveys";
import ToggleQueryFParamButton from "./Components/ToggleQueryFParamButton";
import getSurveys from "./Components/useSurveys";
import getUser from "./Components/useUser";

const filtersList = ["Cash Aid", "IEP", "DLI", "Returning"];
const statusList = ["New", "Pending", "Enrolled", "Denied"];

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const DashboardHome = async ({ searchParams }: Props) => {
  const surveys = await getSurveys({ searchParams });

  const user = await getUser();
  const schoolsList: Map<string, School> = user.settings.mySchools;

  const schoolsArray = Object.values(schoolsList);

  const hasActiveSchools = schoolsArray.some(
    (school) => school.active === true
  );

  if (!hasActiveSchools) {
    return (
      <Container>
        <h1>Dashboard</h1>
        <ErrorNoSchoolsFound />
      </Container>
    );
  }

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
                    key={camelCaseString(filter)}
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
                    key={camelCaseString(status)}
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
        <TableOfSurveys searchParams={searchParams} data={surveys} />
      </div>
    </>
  );
};

export default DashboardHome;
