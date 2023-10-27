"use server";
import { Survey } from "@/app/_modles/surveyModel";
import { dbConnect } from "@/app/db/dbConnect";
import { SurveyFormDataSchema } from "@/app/entities/Survey";
import { revalidatePath } from "next/cache";
import z from "zod";

type Inputs = z.infer<typeof SurveyFormDataSchema>;

export async function updateSurvey(survey: Inputs) {
  const result = SurveyFormDataSchema.safeParse(survey);

  const surveyID = survey._id;
  if (result.success) {
    console.log("Result: SUCCESS");
    await dbConnect();

    const updatedSurvey = await Survey.findOneAndUpdate(
      { _id: surveyID },
      result.data,
      {
        new: true,
      }
    );

    revalidatePath(`/dashboard/${surveyID}`);
    revalidatePath("/dashboard");
    return { success: true, data: result.data };
  }

  if (result.error) {
    console.log(result.error.format());
    return { success: false, error: result.error.format() };
  }
}
