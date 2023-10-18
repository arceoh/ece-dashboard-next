import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-4">{children}</div>
  );
};

export default Container;
