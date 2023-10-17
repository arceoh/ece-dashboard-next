"use server";
import { Survey } from "@/app/entities/Survey";
import { headers } from "next/headers";
import SurveyTableRow from "./SurveyTableRow";
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";
import TablePerPageLimitSelect from "./TablePerPageLimitSelect";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const TableOfSurveys = async ({ searchParams }: Props) => {
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
  const data = await res.json();

  return (
    <>
      <div className="overflow-x-auto my-4">
        <table className="table table-zebra">
          <TableHeader />
          <tbody>
            {data.surveys &&
              data.surveys.map((item: Survey) => {
                return <SurveyTableRow key={item._id} item={item} />;
              })}
          </tbody>
        </table>
      </div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-4">
        <div className="mt-8 grid grid-cols-6 gap-4">
          {/* <div className="mt-8 flex justify-center items-center"> */}
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
