"use client";
import { Popover } from "@headlessui/react";
import { AiFillCaretDown } from "react-icons/ai";

const ColumnToggleMenu = () => {
  return (
    <Popover className="relative dropdown">
      <Popover.Button className="btn btn-sm m-1">
        Columns
        <AiFillCaretDown />
      </Popover.Button>

      <Popover.Panel className="absolute dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-base-100">
        <div className="flex flex-col space-y-4 p-2">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Address</span>
              <input type="checkbox" className="checkbox checkbox-secondary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Address</span>
              <input type="checkbox" className="checkbox checkbox-secondary" />
            </label>
          </div>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
};

export default ColumnToggleMenu;
