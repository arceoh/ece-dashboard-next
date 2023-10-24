"use client";
import useColumnViewStore from "@/app/hooks/useColumnViewStore";
import { ReactNode, ElementType, HTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  fontWeight?: string;
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLOrSVGElement>;

const ColumnToggleView = ({
  children,
  title,
  as: Tag = "div",
  fontWeight = "font-bold",
}: Props) => {
  const { columns } = useColumnViewStore();

  const showColumn = (title: string): boolean => {
    const col = columns.find((obj) => obj.title === title);
    return col ? col.value : true;
  };
  return (
    <>
      <Tag
        align="center"
        className={`${showColumn(title) ? "" : "hidden"} ${fontWeight} `}
      >
        {children}
      </Tag>
    </>
  );
};
export default ColumnToggleView;
