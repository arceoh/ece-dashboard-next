"use client";

// import { updateTodo } from "@/lib/actions";

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

export default function UpdateCheckbox({ school }: Props) {
  //const [isPending, startTransition] = useTransition()
  const router = useRouter();
  const { pending } = useFormStatus();
  //   const [optimisticTodo, addOptimisticTodo] = useOptimistic(
  //     school,
  //     (state: Todo, completed: boolean) => ({ ...state, completed })
  //   );

  return (
    <input
      type="checkbox"
      //   checked={optimisticTodo.completed}
      checked={school.active}
      id={school._id}
      name={camelCaseString(school.name)}
      //onChange={() => startTransition(() => updateTodo(todo))}
      onChange={async () => {
        // addOptimisticTodo(!todo.completed);
        await updateSchool(school);
        router.refresh(); // updates client-side cache
      }}
      disabled={pending}
      className="checkbox checkbox-accent"
    />
  );
}
