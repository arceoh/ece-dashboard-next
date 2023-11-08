import { cn } from "@/utils/cn";
import Link from "next/link";
import { useMemo } from "react";
import {
  TbChevronLeft,
  TbChevronRight,
  TbChevronsLeft,
  TbChevronsRight,
} from "react-icons/tb";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
  currentPage: number;
  pageCount: number;
};

const TablePagination = ({ searchParams, pageCount, currentPage }: Props) => {
  const filters = { ...searchParams };

  const displayPageRange = 5; // Maximum number of page links to display

  const pages = useMemo(() => {
    const pagesToShow = Math.min(displayPageRange, pageCount);
    const startPage = Math.min(
      Math.max(1, currentPage - Math.floor(pagesToShow / 2)),
      pageCount - pagesToShow + 1
    );

    return Array.from({ length: pagesToShow }, (_, i) => startPage + i);
  }, [currentPage, pageCount, displayPageRange]);

  return (
    <div className="text-center pagination">
      <div className="join bg-base-200">
        <Link
          className={cn("join-item btn px-2", {
            "btn-active cursor-default": currentPage === 1,
          })}
          href={{ pathname: "/dashboard", query: { ...filters, page: 1 } }}
        >
          <span className="tooltip" data-tip="First Page">
            <TbChevronsLeft className="text-xl" />
            <span className="sr-only">First Page</span>
          </span>
        </Link>

        <Link
          className={cn("join-item btn px-2", {
            "btn-active cursor-default": currentPage - 1 <= 0,
          })}
          href={{
            pathname: "/dashboard",
            query: { ...filters, page: currentPage - 1 },
          }}
        >
          <span className="tooltip" data-tip="Previous">
            <TbChevronLeft className="text-lg" />
            <span className="sr-only">Previous</span>
          </span>
        </Link>

        {pages.map((page) => (
          <Link
            key={page}
            className={cn("join-item btn hidden md:flex", {
              "btn-active cursor-default": currentPage === page,
            })}
            href={{
              pathname: "/dashboard",
              query: { ...filters, page },
            }}
          >
            {page}
          </Link>
        ))}
        <div className="join-item self-center px-4 bg-base-200 text-sm font-semibold flex md:hidden">
          Page {currentPage}
        </div>

        <Link
          className={cn("join-item btn px-2", {
            "btn-active cursor-default": currentPage === pageCount,
          })}
          href={{
            pathname: "/dashboard",
            query: { ...filters, page: currentPage + 1 },
          }}
        >
          <span className="tooltip" data-tip="Next">
            <TbChevronRight className="text-lg" />
            <span className="sr-only">Next</span>
          </span>
        </Link>

        <Link
          className={cn("join-item btn px-2", {
            "btn-active cursor-default": currentPage === pageCount,
          })}
          href={{
            pathname: "/dashboard",
            query: { ...filters, page: pageCount },
          }}
        >
          <span className="tooltip" data-tip="Last page">
            <TbChevronsRight className="text-xl" />
            <span className="sr-only">Last Page</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TablePagination;
