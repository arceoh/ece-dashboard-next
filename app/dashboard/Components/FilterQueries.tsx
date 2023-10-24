import camelCaseString from "@/utils/camelCaseString";
import FilterResetQueryParamsButton from "./FilterResetQueryParamsButton";
import ToggleQueryFParamButton from "./ToggleQueryFParamButton";

const filtersList = ["Cash Aid", "IEP", "DLI", "Returning"];

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

const FilterQueries = ({ searchParams }: Props) => {
  return (
    <>
      <FilterResetQueryParamsButton
        searchParams={searchParams}
        clearFilters={filtersList}
      />
      {filtersList.map((filter) => {
        return (
          <ToggleQueryFParamButton
            key={camelCaseString(filter)}
            filterSlug={camelCaseString(filter)}
            title={filter}
            searchParams={searchParams}
          />
        );
      })}
    </>
  );
};

export default FilterQueries;
