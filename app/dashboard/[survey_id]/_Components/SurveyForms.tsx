"use client";
import { Survey, SurveyFormDataSchema } from "@/app/entities/Survey";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { updateSurvey } from "../actions";
import dayjs from "dayjs";

interface Props {
  survey: Survey;
}

type Inputs = z.infer<typeof SurveyFormDataSchema>;

const SurveyForms = ({ survey }: Props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(SurveyFormDataSchema),
    defaultValues: {
      ...survey,
      student: {
        ...survey.student,
        birthdate: dayjs(survey.student.birthdate).format("MMMM D, YYYY"),
      },
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await updateSurvey(data);

    if (!result) {
      console.log("Something went wrong");
      return;
    }

    if (result.error) {
      // set local error state
      console.log(result.error);
      return;
    }
    // router.push("/dashboard");
    router.back();
  };

  return (
    <form className="edit-survey mb-28" onSubmit={handleSubmit(processForm)}>
      <div className="space-y-5">
        <fieldset>
          <legend>Student Information</legend>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label className="label" htmlFor="student_firstName">
                <span className="label-text">First Name</span>
              </label>
              <input
                {...register("student.firstName")}
                id="student_firstName"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label" htmlFor="student_middleName">
                <span className="label-text">Middle Name</span>
              </label>
              <input
                {...register("student.middleName")}
                id="student_middleName"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label" htmlFor="student_lastName">
                <span className="label-text">Last Name</span>
              </label>
              <input
                {...register("student.lastName")}
                id="student_lastName"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label className="label" htmlFor="student_birthdate">
                <span className="label-text">Birthdate</span>
              </label>
              <input
                {...register("student.birthdate")}
                id="student_birthdate"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label
              className="cursor-pointer label justify-start"
              htmlFor="student_iep"
            >
              <input
                {...register("student.enrollInIEP")}
                id="student_iep"
                name="student_iep"
                type="checkbox"
                className="checkbox mr-4"
              />
              <span className="label-text">
                Individualized Family Support Plan (IFSP) or an Individualized
                Education Plan (IEP)?
              </span>
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <legend>Guardian Information</legend>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  className="font-semibold text-gray-700 dark:text-gray-200"
                  htmlFor="guardian_firstName"
                >
                  <span className="label-text">First Name</span>
                </label>
                <input
                  {...register("guardian.firstName")}
                  id="guardian_firstName"
                  type="text"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label
                  className="font-semibold text-gray-700 dark:text-gray-200"
                  htmlFor="guardian_lastName"
                >
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  {...register("guardian.lastName")}
                  id="guardian_lastName"
                  type="text"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label
                  className="font-semibold text-gray-700 dark:text-gray-200"
                  htmlFor="guardian_email"
                >
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("guardian.email")}
                  id="guardian_email"
                  type="text"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label
                  className="font-semibold text-gray-700 dark:text-gray-200"
                  htmlFor="guardian_phone"
                >
                  <span className="label-text">Phone</span>
                </label>
                <input
                  {...register("guardian.phone")}
                  id="guardian_phone"
                  type="text"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="label" htmlFor="guardian_address_1">
                <span className="label-text">Address Line 1</span>
              </label>
              <input
                {...register("guardian.address_1")}
                id="guardian_address_1"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label" htmlFor="guardian_address_2">
                <span className="label-text">Address Line 2</span>
              </label>
              <input
                {...register("guardian.address_2")}
                id="guardian_address_2"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label className="label" htmlFor="guardian_city">
                <span className="label-text">City</span>
              </label>
              <input
                {...register("guardian.city")}
                id="guardian_city"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label" htmlFor="student_state">
                <span className="label-text">State</span>
              </label>
              <input
                {...register("guardian.state")}
                id="student_state"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label" htmlFor="guardian_zip">
                <span className="label-text">Zip</span>
              </label>
              <input
                {...register("guardian.zip")}
                id="guardian_zip"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div>
              <label className="label" htmlFor="guardian_familySize">
                <span className="label-text">Family Size</span>
              </label>
              <input
                {...register("guardian.familySize")}
                id="guardian_familySize"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label" htmlFor="guardian_monthlyIncome">
                <span className="label-text">Monthly Income</span>
              </label>
              <input
                {...register("guardian.monthlyIncome")}
                id="guardian_monthlyIncome"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label
              className="label cursor-pointer justify-start"
              htmlFor="guardian_dliInterest"
            >
              <input
                {...register("guardian.dliInterest")}
                id="guardian_dliInterest"
                name="guardian_dliInterest"
                type="checkbox"
                className="checkbox mr-4"
              />
              <span className="label-text">
                Would you be interested in Dual Language Immersion (DLI) for
                your child?
              </span>
            </label>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div>
              <label className="label" htmlFor="guardian_preferredLanguage">
                <span className="label-text">Prefered Language</span>
              </label>
              <input
                {...register("guardian.preferedLanguage")}
                id="guardian_preferredLanguage"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label" htmlFor="guardian_preferredLocation">
                <span className="label-text">Prefered Location</span>
              </label>
              <input
                {...register("guardian.preferedLocation")}
                id="guardian_preferredLocation"
                type="text"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Status & Notes</legend>
          <div className="grid grid-cols-4 gap-6">
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="status">
                <span className="label-text">Status</span>
              </label>
              <select
                {...register("status")}
                className="select select-bordered font-sans"
              >
                <option value="New">New</option>
                <option value="Pending">Pending</option>
                <option value="Enrolled">Enrolled</option>
                <option value="Denied">Denied</option>
              </select>
            </div>

            <div className="col-span-3">
              <div className="form-control">
                <label className="label" htmlFor="notes">
                  <span className="label-text">Notes</span>
                </label>
                <textarea
                  {...register("note")}
                  className="textarea textarea-bordered textarea-md w-full h-24"
                  placeholder="Notes"
                ></textarea>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      {/* Footer */}
      <div className="flex justify-end space-x-3 mt-8">
        <Link href="/dashboard" className="btn  btn-lg">
          Cancel
        </Link>

        <button type="submit" className="btn btn-secondary btn-lg">
          Save and Close
        </button>
      </div>
    </form>
  );
};

export default SurveyForms;
