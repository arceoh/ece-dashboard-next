"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineClear } from "react-icons/md";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  console.log("SEARCH", search);
  const router = useRouter();

  const [data, setData] = useState<string>(search || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.length < 3) {
      return;
    }
    router.push(`/dashboard?search=${data}`);
  };

  useEffect(() => {
    setData(search);
  }, [search]);

  return (
    <form className="join" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setData(e.currentTarget.value)}
        value={data}
        type="text"
        placeholder="Search by Name"
        className="input input-bordered join-item input-sm w-full"
        minLength={3}
      />
      <Link
        href={`/dashboard?search=${data}`}
        prefetch={false}
        type="submit"
        className={`${
          data.length < 3 ? "btn-disabled" : ""
        }  btn  btn-sm join-item`}
      >
        Search
      </Link>
      <Link
        href={"/dashboard"}
        replace
        className={`${
          data.length < 1 ? "btn-disabled" : ""
        }  btn  btn-sm join-item`}
      >
        <MdOutlineClear /> <span className="sr-only">Clear</span>
      </Link>
    </form>
  );
};

export default SearchInput;
