"use client";
import useFilterStore from "@/app/hooks/useFilterStore";
import { Switch } from "@headlessui/react";

interface Props {
  filterSlug: string;
  title: string;
}

const FilterSwitchButton = ({ filterSlug, title }: Props) => {
  const { filters, toggleFilter } = useFilterStore();

  return (
    <Switch
      checked={filters.includes(filterSlug)}
      onChange={(value) => toggleFilter(value, filterSlug)}
      className={`${
        filters.includes(filterSlug) ? " btn-active" : ""
      } btn btn-xs `}
    >
      <span>{title}</span>
    </Switch>
  );
};

export default FilterSwitchButton;
