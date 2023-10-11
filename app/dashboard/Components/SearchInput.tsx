"use client";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useEffect, useRef } from "react";
import useSearchStore from "@/app/hooks/useSearchStore";

const SearchInput = () => {
  const searchText = useSearchStore((state) => state.searchText);
  const setSearchText = useSearchStore((state) => state.setSearchText);

  const textRef = useRef(searchText); // set to ref to imporve performance: @link: https://docs.pmnd.rs/zustand/recipes/recipes#transient-updates-(for-frequent-state-changes)

  useEffect(
    () =>
      useSearchStore.subscribe((state) => (textRef.current = state.searchText)),
    []
  );

  return (
    <input
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      type="text"
      placeholder="Seach by Name"
      className="input input-bordered input-sm w-full "
    />
  );
};

export default SearchInput;
