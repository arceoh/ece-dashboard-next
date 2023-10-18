"use client";
import { Survey } from "@/app/entities/Survey";
import useSWR from "swr";
import SurveyTableRow from "./SurveyTableRow";
import { BASE_URL } from "@/app/config";

const fetcher = () =>
  fetch(`${BASE_URL}/api/surveys`).then((res) => res.json());

const TableBody = () => {
  const { data: surveys, error } = useSWR("/api/surveys", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!surveys) return <div>Loading...</div>;

  return (
    <tbody>
      {surveys.map((item: Survey) => {
        return <SurveyTableRow key={item._id} item={item} />;
      })}
    </tbody>
  );
};

export default TableBody;
