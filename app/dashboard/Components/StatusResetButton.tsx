"use client";
import useStatusStore from "@/app/hooks/useStatusStore";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

const StatusResetButton = () => {
  const { status, resetStatus } = useStatusStore();

  return (
    <button onClick={() => resetStatus()} className="btn btn-xs">
      <span>{status.length > 0 ? <MdFilterAltOff /> : <MdFilterAlt />}</span>
      <span>{status.length > 0 ? "Clear" : "Filter"}</span>
    </button>
  );
};

export default StatusResetButton;
