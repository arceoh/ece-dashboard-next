"use client";
import TableHeader from "./TableHeader";
import useStore from "@/app/hooks/useStore";
import useFilterStore from "@/app/hooks/useFilterStore";
import useSearchStore from "@/app/hooks/useSearchStore";
import useStatusStore from "@/app/hooks/useStatusStore";
import { useEffect, useState } from "react";
import { Survey } from "@/app/entities/Survey";
import SurveyTableRow from "./SurveyTableRow";

const TableOfSurveys = () => {
  const [data, setData] = useState<Survey[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  const filters = useStore(useFilterStore, (state) => state.filters);
  const status = useStore(useStatusStore, (state) => state.status);
  const searchText = useStore(useSearchStore, (state) => state.searchText);

  const baseUrl = "http://localhost:3000/api/surveys";

  const queryParams: { [key: string]: string } = {};
  if (filters && filters.length > 0) {
    queryParams.filters = filters.join(",");
  }

  if (status && status.length > 0) {
    queryParams.status = status.join(",");
  }

  if (searchText) {
    queryParams.searchText = searchText;
  }

  const queryString: string = Object.keys(queryParams)
    .map((key) => `${key}=${encodeURIComponent(queryParams[key])}`)
    .join("&");

  const urlWithParams: string = queryString
    ? `${baseUrl}?${queryString}`
    : baseUrl;

  useEffect(() => {
    console.log("URL WITH PARAMS", urlWithParams, "\n");
    fetch(urlWithParams, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [filters, status, searchText]);

  console.log(filters);
  console.log(status);
  console.log(searchText);

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
