import camelCaseString from "@/utils/camelCaseString";
import FilterResetQueryParamsButton from "./FilterResetQueryParamsButton";
import ToggleQueryFParamButton from "./ToggleQueryFParamButton";

const statusList = ["New", "Pending", "Enrolled", "Denied"];
type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

const StatusQueries = ({ searchParams }: Props) => {
  return (
    <>
      <FilterResetQueryParamsButton
        searchParams={searchParams}
        clearFilters={statusList}
      />
      {statusList.map((status) => {
        return (
          <ToggleQueryFParamButton
            key={camelCaseString(status)}
            filterSlug={camelCaseString(status)}
            title={status}
            searchParams={searchParams}
          />
        );
      })}
    </>
  );
};

export default StatusQueries;
