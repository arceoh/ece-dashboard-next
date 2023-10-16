"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, use, useEffect, useState } from "react";
import { MdOutlineClear } from "react-icons/md";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const router = useRouter();

  const [data, setData] = useState<string>(search);
  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setData("");
    router.push("/dashboard");
  };

  useEffect(() => {
    setData(search);
  }, []);

  return (
    <form className="join">
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
        Submit
      </Link>

      <button
        type="reset"
        onClick={(e) => handleClear(e)}
        className={`${
          data.length < 3 ? "btn-disabled" : ""
        }  btn  btn-sm join-item`}
      >
        <MdOutlineClear /> <span className="sr-only">Clear</span>
      </button>
    </form>
  );
};

export default SearchInput;
