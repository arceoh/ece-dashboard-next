import Container from "@/app/components/Container";
import camelCaseString from "@/utils/camelCaseString";
import { getServerSession } from "next-auth/next";
import { headers } from "next/headers";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { School } from "../entities/School";
import { Survey } from "../entities/Survey";
import ColumnToggleMenu from "./Components/ColumnToggleMenu";
import ErrorNoSchoolsFound from "./Components/ErrorNoSchoolsFound";
import FilterResetQueryParamsButton from "./Components/FilterResetQueryParamsButton";
import SearchInput from "./Components/SearchInput";
import TableOfSurveys from "./Components/TableOfSurveys";
import ToggleQueryFParamButton from "./Components/ToggleQueryFParamButton";

const filtersList = ["Cash Aid", "IEP", "DLI", "Returning"];
const statusList = ["New", "Pending", "Enrolled", "Denied"];

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

interface Data {
  surveys: Survey | Survey[];
  pageCount: number;
  currentPage: number;
  pageSize: number;
}

const DashboardHome = async ({ searchParams }: Props) => {
  const session = await getServerSession(authOptions);

  const baseUrl = "http://localhost:3000/api/surveys";

  let queryString: string = "";
  if (searchParams) {
    queryString = Object.keys(searchParams)
      .map((key) => `${key}=${searchParams[key]}`)
      .join("&");
  }

  const urlWithParams: string =
    queryString.length > 0 ? `${baseUrl}?${queryString}` : baseUrl;

  const res = await fetch(urlWithParams, {
    method: "GET",
    headers: headers(),
    cache: "no-cache",
  });
  const data: Data = await res.json();

  const response = await fetch(
    `http://localhost:3000/api/users/${session!.user._id}`,
    {
      headers: headers(),
      cache: "no-cache",
    }
  );
  const userData = await response.json();
  const schoolsList: School[] = userData.user.settings.mySchools;

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
        <TableOfSurveys searchParams={searchParams} data={data} />
      </div>
    </>
  );
};

export default DashboardHome;
