import { BASE_URL } from "@/app/config";
import { Survey } from "@/app/entities/Survey";
import { headers } from "next/headers";

interface Data {
  surveys: Survey | Survey[];
  pageCount: number;
  currentPage: number;
  pageSize: number;
}

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const getSurveys = async ({ searchParams }: Props) => {
  const headersInstance = headers();
  const baseUrl = `${BASE_URL}/api/surveys`;
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
    headers: headersInstance,
    cache: "no-cache",
    next: { tags: ["surveys"] },
  });
  const data: Data = await res.json();

  return data;
};

export default getSurveys;
