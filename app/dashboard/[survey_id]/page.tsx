import { Suspense } from "react";
import SurveyForms from "./_Components/SurveyForms";
import { Survey } from "@/app/entities/Survey";
import Loading from "./loading";

interface Props {
  params: { survey_id: string };
}

const EditSurveyPage = async ({ params: { survey_id } }: Props) => {
  const response = await fetch(
    `http://localhost:3000/api/surveys/${survey_id}`
  );
  const data = await response.json();
  const survey: Survey = data.survey;

  return (
    <Suspense fallback={<Loading />}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-4">
        <h1>Preschool Interest List Survey</h1>
        <SurveyForms survey={survey} />
      </div>
    </Suspense>
  );
};

export default EditSurveyPage;
