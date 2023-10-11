"use client";
import useColumnViewStore from "@/app/hooks/useColumnViewStore";
import { ReactNode, ElementType, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  children: ReactNode;
  title: string;
  fontWeight?: string;
  as?: ElementType;
}

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
      {showColumn(title) && (
        <Tag align="center" className={`${fontWeight} `}>
          {children}
        </Tag>
      )}
    </>
  );
};
export default ColumnToggleView;
