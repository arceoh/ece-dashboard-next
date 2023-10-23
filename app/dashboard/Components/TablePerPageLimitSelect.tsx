import Link from "next/link";
import { MdFilterAlt } from "react-icons/md";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

const TablePerPageLimitSelect = ({ searchParams }: Props) => {
  const pageSizeOptions = [5, 10, 25, 50];
  const currentPageSize = Number(searchParams?.pageSize) || 5;
  let pageSize = 5;
  if (searchParams) {
    pageSize = Number(searchParams["pageSize"]) || 5;
  }

  const filters = { ...searchParams };

  if (filters.hasOwnProperty("page")) {
    delete filters["page"];
  }
  if (filters.hasOwnProperty("pageSize")) {
    delete filters["pageSize"];
  }

  return (
    <div className="dropdown dropdown-top dropdown-end">
      <div className="flex">
        <label tabIndex={0} className="btn btn-sm">
          <MdFilterAlt /> Limit
          <span className="badge badge-neutral">{currentPageSize}</span>
        </label>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu shadow bg-base-100"
      >
        {pageSizeOptions.map((option) => {
          return (
            <li key={option} className="">
              <Link
                key={option}
                className={`${
                  currentPageSize === option ? "btn-active" : ""
                } btn btn-sm btn-ghost`}
                href={{
                  pathname: "/dashboard",
                  query: { ...filters, pageSize: option },
                }}
              >
                {option}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TablePerPageLimitSelect;
