"use client";
import useFilterStore from "@/app/hooks/useFilterStore";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

const FiltersResetButton = () => {
  const { filters, resetFilters } = useFilterStore();

  return (
    <button onClick={() => resetFilters()} className="btn btn-xs">
      <span>{filters.length > 0 ? <MdFilterAltOff /> : <MdFilterAlt />}</span>
      <span>{filters.length > 0 ? "Clear" : "Filter"}</span>
    </button>
  );
};

export default FiltersResetButton;
