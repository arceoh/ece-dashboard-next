"use client";
import { Survey } from "@/app/entities/Survey";
import useSWR from "swr";
import SurveyTableRow from "./SurveyTableRow";

const fetcher = () =>
  fetch(`http://localhost:3000/api/surveys`).then((res) => res.json());

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
