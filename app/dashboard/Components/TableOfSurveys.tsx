"use server";
import { Survey } from "@/app/entities/Survey";
import { headers } from "next/headers";
import SurveyTableRow from "./SurveyTableRow";
import TableHeader from "./TableHeader";

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
    <div className="overflow-x-auto my-4">
      <table className="table table-zebra">
        <TableHeader />
        <tbody>
          {data &&
            data.map((item: Survey) => {
              return <SurveyTableRow key={item._id} item={item} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableOfSurveys;
