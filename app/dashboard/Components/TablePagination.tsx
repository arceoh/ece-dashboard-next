import Link from "next/link";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
  currentPage: number;
  pageCount: number;
};

const TablePagination = ({ searchParams, pageCount, currentPage }: Props) => {
  const pages = Array.from(Array(pageCount).keys());
  const filters = { ...searchParams };

  if (pageCount === 1) return null;

  return (
    <div className="text-center">
      <div className="join">
        {pages.map((page) => {
          return (
            <Link
              key={page + 1}
              className={`${
                currentPage === page + 1 ? "btn-active btn-disabled" : ""
              } join-item btn`}
              href={{
                pathname: "/dashboard",
                query: { ...filters, page: page + 1 },
              }}
            >
              {page + 1}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TablePagination;
