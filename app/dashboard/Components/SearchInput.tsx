"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdFilterAltOff } from "react-icons/md";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const router = useRouter();

  const [searchText, setSearchText] = useState<string>(search);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText.length < 3) {
      return;
    }
    router.push(`/dashboard?search=${searchText}`);
  };
  const clearSearch = () => {
    setSearchText("");
    router.push("/dashboard");
  };

  useEffect(() => {
    setSearchText(search);
  }, [search]);

  return (
    <form className="join" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setSearchText(e.currentTarget.value)}
        value={searchText}
        type="text"
        placeholder="Search by Name"
        className="input input-bordered join-item input-sm w-full"
        minLength={3}
      />
      <Link
        href={`/dashboard?search=${searchText}`}
        prefetch={false}
        type="submit"
        className={`${
          searchText.length < 3 ? "btn-disabled" : ""
        }  btn  btn-sm join-item`}
      >
        Search
      </Link>
      <button
        onClick={clearSearch}
        className={cn("btn  btn-sm join-item", {
          "btn-disabled": search === "" && searchText.length < 3,
        })}
      >
        <MdFilterAltOff /> <span className="sr-only">Clear Search</span>
      </button>
    </form>
  );
};

export default SearchInput;
