"use server";
import { Suspense } from "react";
import SurveyForms from "./_Components/SurveyForms";
import { Survey } from "@/app/entities/Survey";
import Loading from "./loading";
import { headers } from "next/headers";
import { BASE_URL } from "@/app/config";

type Props = {
  params: { survey_id: string };
};

const EditSurveyPage = async ({ params: { survey_id } }: Props) => {
  const headersInstance = new Headers(headers());

  const response = await fetch(`${BASE_URL}/api/surveys/${survey_id}`, {
    headers: headersInstance,
    cache: "no-store",
  });
  const data = await response.json();
  const survey: Survey = data.survey;

  const res = await fetch(`${BASE_URL}/api/schools`, {
    headers: headersInstance,
    cache: "default",
  });
  const schoolsList = await res.json();

  return (
    <Suspense fallback={<Loading />}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-4">
        <h1>Preschool Interest List Survey</h1>
        <SurveyForms schoolsList={schoolsList} survey={survey} />
      </div>
    </Suspense>
  );
};

export default EditSurveyPage;
