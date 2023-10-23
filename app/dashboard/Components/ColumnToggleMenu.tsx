"use client";
import useColumnViewStore from "@/app/hooks/useColumnViewStore";
import { Popover } from "@headlessui/react";
import { AiFillCaretDown } from "react-icons/ai";
import ColumnSelectCheckbox from "./ColumnSelectCheckbox";

const ColumnToggleMenu = () => {
  const { columns, toggleColumn } = useColumnViewStore();

  return (
    <Popover className="dropdown">
      <Popover.Button className="btn btn-xs">
        <div className="flex">
          <span className="mr-2">Columns</span>
          <AiFillCaretDown />
        </div>
      </Popover.Button>
      <Popover.Panel className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {columns.map((item) => (
          <ColumnSelectCheckbox
            key={item.title}
            title={item.title}
            value={item.value}
            onChange={() => toggleColumn(item.title)}
          />
        ))}
      </Popover.Panel>
    </Popover>
  );
};

export default ColumnToggleMenu;
