import Container from "@/app/components/Container";
import { School } from "../entities/School";
import ColumnToggleMenu from "./Components/ColumnToggleMenu";
import ErrorNoSchoolsFound from "./Components/ErrorNoSchoolsFound";
import FilterQueries from "./Components/FilterQueries";
import SearchInput from "./Components/SearchInput";
import StatusQueries from "./Components/StatusQueries";
import TableOfSurveys from "./Components/TableOfSurveys";
import getSurveys from "./Components/useSurveys";
import getUser from "./Components/useUser";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

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
        <div className="flex justify-start flex-wrap items-center sm:justify-between space-y-2 xl:space-y-0">
          <div className="btn-group btn-group-horizontal mr-4">
            <FilterQueries searchParams={searchParams} />
          </div>
          <div className="btn-group btn-group-horizontal">
            <StatusQueries searchParams={searchParams} />
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
