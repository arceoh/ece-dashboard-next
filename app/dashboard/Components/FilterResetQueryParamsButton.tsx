import camelCaseString from "@/utils/camelCaseString";
import Link from "next/link";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
  clearFilters: string[];
};

const FilterResetQueryParamsButton = ({
  searchParams,
  clearFilters,
}: Props) => {
  const filters = { ...searchParams };

  const active = clearFilters.some((key) =>
    filters.hasOwnProperty(camelCaseString(key))
  );

  for (const key of clearFilters) {
    delete filters[camelCaseString(key)];
  }

  return (
    <Link
      className="btn btn-xs"
      href={{
        pathname: "/dashboard",
        query: { ...filters },
      }}
    >
      <span>{!active ? <MdFilterAlt /> : <MdFilterAltOff />}</span>
      <span>{!active ? "Filter" : "Clear"}</span>
    </Link>
  );
};

export default FilterResetQueryParamsButton;
