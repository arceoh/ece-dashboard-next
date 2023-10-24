"use client";
import useStatusStore from "@/app/hooks/useStatusStore";
import { Switch } from "@headlessui/react";

type Props = {
  StatusSlug: string;
  title: string;
  isLast?: boolean;
  isFirst?: boolean;
};

const StatusSwitchButton = ({ StatusSlug, title }: Props) => {
  const { status, toggleStatus } = useStatusStore();
  return (
    <Switch
      checked={status.includes(StatusSlug)}
      onChange={(value) => toggleStatus(value, StatusSlug)}
      className={`${
        status.includes(StatusSlug) ? "btn-active" : ""
      } btn btn-xs`}
    >
      <span>{title}</span>
    </Switch>
  );
};

export default StatusSwitchButton;
