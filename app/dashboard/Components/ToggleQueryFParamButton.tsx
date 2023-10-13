import Link from "next/link";

interface Props {
  filterSlug: string;
  title: string;
  searchParams?: { [key: string]: string | string[] | undefined };
}
const ToggleQueryFParamButton = ({
  filterSlug,
  title,
  searchParams,
}: Props) => {
  const filters = { ...searchParams };
  let active: boolean;

  if (filters.hasOwnProperty(filterSlug)) {
    delete filters[filterSlug];
    active = true;
  } else {
    filters[filterSlug] = "true";
    active = false;
  }

  return (
    <Link
      replace
      className={`${active ? "btn-active bg-blue-700" : ""} btn btn-xs `}
      href={{
        pathname: "/dashboard",
        query: { ...filters },
      }}
    >
      {title}
    </Link>
  );
};

export default ToggleQueryFParamButton;
