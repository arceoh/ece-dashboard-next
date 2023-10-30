"use client";
import { School } from "@/app/entities/School";
import { Survey, SurveyFormDataSchema } from "@/app/entities/Survey";
import { cn } from "@/utils/cn";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { updateSurvey } from "../actions";
import ErrorMessageWrapper from "./ErrorMessageWrapper";

type Props = {
  survey: Survey;
  schoolsList: School[];
};

type Inputs = z.infer<typeof SurveyFormDataSchema>;

const SurveyForms = ({ survey, schoolsList }: Props) => {
  const sortedSchool = schoolsList.toSorted((a, b) => {
    return a.name.localeCompare(b.name);
  });
  console.log(survey);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors, isSubmitting },
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
    console.log("Sending Form to Server");
    console.log("React Hook Form Errors", errors);

    const formatedData = {
      ...data,
      student: {
        ...data.student,
        birthdate: dayjs(data.student.birthdate).toDate(),
      },
    };

    const result = await updateSurvey(formatedData);

    if (!result) {
      console.log("Something went wrong");
      return;
    }

    if (result.error) {
      // set Errors from server to local error state
      if (result.error.student?.firstName) {
        setError("student.firstName", {
          type: "server",
          message: "First name is required",
        });
      }
      if (result.error.student?.lastName) {
        setError("student.lastName", {
          type: "server",
          message: "Last name is required",
        });
      }
      if (result.error.student?.birthdate) {
        setError("student.birthdate", {
          type: "server",
          message: "Birthdate is required",
        });
      }
      if (result.error.guardian?.familySize) {
        setError("guardian.familySize", {
          type: "server",
          message: "Familiy size is invalid. Must be between 1 and 20",
        });
      }
      if (result.error.guardian?.monthlyIncome) {
        setError("guardian.monthlyIncome", {
          type: "server",
          message: "Montly Income is invalid. Must be greater than 0",
        });
      }
      return;
    }

    if (result.success) {
      router.back();
    }
  };

  return (
    <>
      <form className="edit-survey mb-28" onSubmit={handleSubmit(processForm)}>
        <div className="space-y-8">
          <fieldset>
            <legend>Student Information</legend>
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <label className="label" htmlFor="student.firstName">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    {...register("student.firstName")}
                    id="student.firstName"
                    type="text"
                    className={cn("input input-bordered w-full", {
                      "input-error": errors?.student?.lastName,
                    })}
                    aria-invalid={errors?.student?.firstName ? "true" : "false"}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="student.firstName"
                    render={({ message }) => (
                      <ErrorMessageWrapper message={message} />
                    )}
                  />
                </div>
                <div>
                  <label className="label" htmlFor="student.middleName">
                    <span className="label-text">Middle Name</span>
                  </label>
                  <input
                    {...register("student.middleName")}
                    id="student.middleName"
                    aria-invalid={
                      errors?.student?.middleName ? "true" : "false"
                    }
                    type="text"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="student.lastName">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    {...register("student.lastName")}
                    aria-invalid={errors?.student?.lastName ? "true" : "false"}
                    id="student.lastName"
                    type="text"
                    className={cn(
                      "input input-bordered w-full",
                      errors?.student?.lastName && "input-error"
                    )}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="student.lastName"
                    render={({ message }) => (
                      <ErrorMessageWrapper message={message} />
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <label className="label" htmlFor="student.birthdate">
                    <span className="label-text">Birthdate</span>
                  </label>
                  <input
                    {...register("student.birthdate")}
                    id="student.birthdate"
                    aria-invalid={errors?.student?.birthdate ? "true" : "false"}
                    type="text"
                    className={cn(
                      "input input-bordered w-full",
                      errors?.student?.birthdate && "input-error"
                    )}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="student.birthdate"
                    render={({ message }) => (
                      <ErrorMessageWrapper message={message} />
                    )}
                  />
                </div>
              </div>
              <div className="form-control">
                <label
                  className="cursor-pointer label justify-start"
                  htmlFor="student.enrollInIEP"
                >
                  <input
                    {...register("student.enrollInIEP")}
                    id="student.enrollInIEP"
                    aria-invalid={
                      errors?.student?.enrollInIEP ? "true" : "false"
                    }
                    type="checkbox"
                    className="checkbox mr-4"
                  />
                  <span className="label-text">
                    Individualized Family Support Plan (IFSP) or an
                    Individualized Education Plan (IEP)?
                  </span>
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Guardian Information</legend>
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    className="font-semibold text-gray-700 dark:text-gray-200"
                    htmlFor="guardian.firstName"
                  >
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    {...register("guardian.firstName")}
                    id="guardian.firstName"
                    aria-invalid={
                      errors?.guardian?.firstName ? "true" : "false"
                    }
                    type="text"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="guardian.firstName"
                    render={({ message }) => (
                      <ErrorMessageWrapper message={message} />
                    )}
                  />
                </div>
                <div>
                  <label
                    className="font-semibold text-gray-700 dark:text-gray-200"
                    htmlFor="guardian.lastName"
                  >
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    {...register("guardian.lastName")}
                    id="guardian.lastName"
                    aria-invalid={errors?.guardian?.lastName ? "true" : "false"}
                    type="text"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="guardian.lastName"
                    render={({ message }) => (
                      <ErrorMessageWrapper message={message} />
                    )}
                  />
                </div>
                <div>
                  <label
                    className="font-semibold text-gray-700 dark:text-gray-200"
                    htmlFor="guardian.email"
                  >
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("guardian.email")}
                    id="guardian.email"
                    aria-invalid={errors?.guardian?.email ? "true" : "false"}
                    type="text"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="guardian.email"
                    render={({ message }) => (
                      <ErrorMessageWrapper message={message} />
                    )}
                  />
                </div>
                <div>
                  <label
                    className="font-semibold text-gray-700 dark:text-gray-200"
                    htmlFor="guardian.phone"
                  >
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    {...register("guardian.phone")}
                    id="guardian.phone"
                    aria-invalid={errors?.guardian?.phone ? "true" : "false"}
                    type="text"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="label" htmlFor="guardian.address_1">
                    <span className="label-text">Address Line 1</span>
                  </label>
                  <input
                    {...register("guardian.address_1")}
                    id="guardian.address_1"
                    aria-invalid={
                      errors?.guardian?.address_1 ? "true" : "false"
                    }
                    type="text"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="guardian.address_2">
                    <span className="label-text">Address Line 2</span>
                  </label>
                  <input
                    {...register("guardian.address_2")}
                    id="guardian.address_2"
                    aria-invalid={
                      errors?.guardian?.address_2 ? "true" : "false"
                    }
                    type="text"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <label className="label" htmlFor="guardian.city">
                    <span className="label-text">City</span>
                  </label>
                  <input
                    {...register("guardian.city")}
                    id="guardian.city"
                    aria-invalid={errors?.guardian?.city ? "true" : "false"}
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
                    id="guardian.state"
                    aria-invalid={errors?.guardian?.state ? "true" : "false"}
                    type="text"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="guardian.zip">
                    <span className="label-text">Zip</span>
                  </label>
                  <input
                    {...register("guardian.zip")}
                    id="guardian.zip"
                    aria-invalid={errors?.guardian?.zip ? "true" : "false"}
                    type="text"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <div>
                  <label className="label" htmlFor="guardian.familySize">
                    <span className="label-text">Family Size</span>
                  </label>
                  <input
                    {...register("guardian.familySize")}
                    id="guardian.familySize"
                    aria-invalid={
                      errors?.guardian?.familySize ? "true" : "false"
                    }
                    type="text"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="guardian.familySize"
                    render={({ message }) => (
                      <ErrorMessageWrapper message={message} />
                    )}
                  />
                </div>
                <div>
                  <label className="label" htmlFor="guardian.monthlyIncome">
                    <span className="label-text">Monthly Income</span>
                  </label>
                  <input
                    {...register("guardian.monthlyIncome")}
                    id="guardian.monthlyIncome"
                    aria-invalid={
                      errors?.guardian?.monthlyIncome ? "true" : "false"
                    }
                    type="text"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="guardian.monthlyIncome"
                    render={({ message }) => (
                      <ErrorMessageWrapper message={message} />
                    )}
                  />
                </div>
              </div>
              <div className="form-control">
                <label
                  className="label cursor-pointer justify-start"
                  htmlFor="guardian.dliInterest"
                >
                  <input
                    {...register("guardian.dliInterest")}
                    id="guardian.dliInterest"
                    aria-invalid={
                      errors?.guardian?.dliInterest ? "true" : "false"
                    }
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
                  <label className="label" htmlFor="guardian.preferredLanguage">
                    <span className="label-text">Prefered Language</span>
                  </label>
                  <input
                    {...register("guardian.preferredLanguage")}
                    id="guardian.preferredLanguage"
                    aria-invalid={
                      errors?.guardian?.preferredLanguage ? "true" : "false"
                    }
                    type="text"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="guardian.preferredLocation">
                    <span className="label-text">Prefered Location</span>
                  </label>
                  <select
                    {...register("guardian.preferredLocation")}
                    id="guardian.preferredLocation"
                    className="select select-bordered w-full max-w-xs"
                  >
                    {sortedSchool.map((school) => (
                      <option
                        className="btn btn-ghost btn-block font-sans cursor-pointer normal-case text-lg "
                        key={school._id}
                        value={school.name}
                      >
                        {school.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Status & Notes</legend>
            <div className="space-y-5">
              <div className="grid grid-cols-4 gap-6">
                <div className="form-control w-full max-w-xs col-span-4 md:col-span-1">
                  <label className="label" htmlFor="status">
                    <span className="label-text">Status</span>
                  </label>
                  <select
                    {...register("status")}
                    id="status"
                    aria-invalid={errors?.status ? "true" : "false"}
                    className="select select-bordered font-sans"
                  >
                    <option value="New">New</option>
                    <option value="Pending">Pending</option>
                    <option value="Enrolled">Enrolled</option>
                    <option value="Denied">Denied</option>
                  </select>
                </div>
                <div className="col-span-4 md:col-span-3">
                  <div className="form-control">
                    <label className="label" htmlFor="notes">
                      <span className="label-text">Notes</span>
                    </label>
                    <textarea
                      {...register("note")}
                      id="notes"
                      aria-invalid={errors?.note ? "true" : "false"}
                      className="textarea textarea-bordered textarea-lg w-full h-44"
                      placeholder="Notes"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        {/* Footer */}
        <div className="flex justify-end space-x-3 mt-8">
          <button
            onClick={() => router.back()}
            type="button"
            className="btn  btn-lg"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-secondary btn-lg">
            Save and Close
          </button>
        </div>
      </form>
    </>
  );
};

export default SurveyForms;
