import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const ColumnTD = ({ children }: Props) => {
  return (
    <div className="px-4 py-4 text-sm font-medium whitespace-nowrap">
      {children}
    </div>
  );
};
export default ColumnTD;
