"use server";
import { Survey } from "@/app/entities/Survey";
import SurveyTableRow from "./SurveyTableRow";
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";
import TablePerPageLimitSelect from "./TablePerPageLimitSelect";
import Container from "@/app/components/Container";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
  data: {
    surveys: Survey | Survey[];
    pageCount: number;
    currentPage: number;
    pageSize: number;
  };
};

const TableOfSurveys = ({ searchParams, data }: Props) => {
  const surveys: Survey | Survey[] = Object.values(data.surveys);

  return (
    <>
      <div className="overflow-x-auto my-4">
        <table className="table table-zebra">
          <TableHeader />
          <tbody>
            {surveys &&
              surveys.map((survey: Survey) => {
                return <SurveyTableRow key={survey._id} item={survey} />;
              })}
          </tbody>
        </table>
      </div>
      <Container>
        <div className="flex items-center flex-wrap justify-around sm:justify-between my-auto">
          <TablePagination
            pageCount={data.pageCount}
            currentPage={data.currentPage}
            searchParams={searchParams}
          />
          <TablePerPageLimitSelect searchParams={searchParams} />
        </div>
      </Container>
    </>
  );
};

export default TableOfSurveys;
