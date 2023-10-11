"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { experimental_useOptimistic as useOptimistic } from "react";
import camelCaseString from "@/utils/camelize";
import { updateSchool } from "./actions";

interface Props {
  school: {
    name: string;
    _id: string;
    active: boolean;
  };
}
interface School {
  name: string;
  _id: string;
  active: boolean;
}

export default function UpdateCheckbox({ school }: Props) {
  const router = useRouter();
  const { pending } = useFormStatus();

  const [optimisticSchool, addOptimisticSchool] = useOptimistic(
    school,
    (state: School, active: boolean) => ({ ...state, active })
  );

  return (
    <input
      type="checkbox"
      checked={optimisticSchool.active}
      id={school._id}
      name={camelCaseString(school.name)}
      onChange={async () => {
        addOptimisticSchool(!school.active);
        await updateSchool(school);
        router.refresh(); // updates client-side cache
      }}
      disabled={pending}
      className="checkbox checkbox-accent"
    />
  );
}
