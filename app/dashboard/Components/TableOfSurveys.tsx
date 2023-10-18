"use server";
import { Survey } from "@/app/entities/Survey";
import SurveyTableRow from "./SurveyTableRow";
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";
import TablePerPageLimitSelect from "./TablePerPageLimitSelect";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
  data: {
    surveys: Survey | Survey[];
    pageCount: number;
    currentPage: number;
    pageSize: number;
  };
}

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
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-4">
        <div className="mt-8 grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-2 items-center justify-center flex">
            <TablePagination
              pageCount={data.pageCount}
              currentPage={data.currentPage}
              searchParams={searchParams}
            />
          </div>
          <div className="col-start-6 col-span-1 items-center justify-center flex">
            <TablePerPageLimitSelect searchParams={searchParams} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TableOfSurveys;
