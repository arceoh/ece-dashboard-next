"use client";
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { experimental_useOptimistic as useOptimistic } from "react";
import camelCaseString from "@/utils/camelCaseString";
import { updateSchool } from "./actions";
import { School } from "@/app/entities/School";

interface Props {
  school: School;
}

export default function UpdateCheckbox({ school }: Props) {
  const router = useRouter();
  const { pending } = useFormStatus();

  const [optimisticSchool, addOptimisticSchool] = useOptimistic(
    school,
    (state: School, active: boolean) => ({ ...state, active })
  );

  return (
    <div
      key={school._id}
      className="form-control hover:bg-base-200 rounded-md px-2"
    >
      <label
        htmlFor={camelCaseString(school.name)}
        className="label cursor-pointer"
      >
        <span className="label-text">{school.name}</span>
        <input
          type="checkbox"
          checked={optimisticSchool.active}
          id={school._id}
          name={camelCaseString(school.name)}
          onChange={async () => {
            addOptimisticSchool(!school.active);
            await updateSchool(school);
            router.refresh();
          }}
          disabled={pending}
          className="checkbox checkbox-accent"
        />
      </label>
    </div>
  );
}
