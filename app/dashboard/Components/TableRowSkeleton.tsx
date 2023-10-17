import ColumnToggleView from "./ColumnToggleView";

const TableRowSkeleton = () => {
  return (
    <tr className="dark:hover:bg-slate-800 hover:bg-slate-100  z-0 animate-pulse relative">
      <td className="px-4 py-12 w-60  text-sm font-medium whitespace-nowrap">
        <div className="h-2.5 mb-2  bg-gray-300 rounded-full dark:bg-gray-600 w-3/5"></div>
        <div className="w-4/5 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </td>
      <td className="px-4 py-12 w-60  text-sm font-medium whitespace-nowrap">
        <div className="h-2.5 mb-2  bg-gray-300 rounded-full dark:bg-gray-600 w-1/5"></div>
      </td>
      <ColumnToggleView as={"td"} title="Address">
        <div className="w-40 mx-auto">
          <div className="h-2.5 mb-2 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 w-4/5"></div>
          <div className="w-/5 h-2 mx-auto bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="City">
        <div className="w-20 mx-auto">
          <div className="h-2.5 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 w-4/5"></div>
        </div>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="State">
        <div className="w-10 mx-auto">
          <div className="h-2.5 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 w-2/5"></div>
        </div>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Zip">
        <div className="w-16 mx-auto">
          <div className="h-2.5 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 w-2/5"></div>
        </div>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Cash Aid">
        <div className="w-20 mx-auto">
          <div className="h-7 w-7 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 "></div>
        </div>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Family Size">
        <div className="h-2.5 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 w-2/5"></div>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Income">
        <div className="w-20 mx-auto">
          <div className="h-2.5 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 w-2/5"></div>
        </div>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="School Preference">
        <div className="w-32 mx-auto">
          <div className="h-2.5 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 w-2/5"></div>
        </div>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="DLI">
        <div className="h-2.5 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 w-2/5"></div>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Student">
        <div className="w-32 mx-auto">
          <div className="h-2.5 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 w-2/5"></div>
        </div>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Birthdate">
        <div className="w-40 mx-auto">
          <div className="h-2.5 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 w-2/5"></div>
        </div>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="IEP">
        <div className="w-20 mx-auto">
          <div className="h-2.5 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 w-2/5"></div>
        </div>
      </ColumnToggleView>
      <ColumnToggleView as={"td"} title="Returning Student">
        <div className="w-20 mx-auto">
          <div className="h-7 w-7 mx-auto  bg-gray-300 rounded-full dark:bg-gray-600 "></div>
        </div>
      </ColumnToggleView>
      <td className="text-center  px-4 py-3.5 text-sm  text-gray-500 dark:text-gray-400">
        <div className="h-6 w-6 mx-auto  bg-gray-300 rounded-sm dark:bg-gray-600 "></div>
      </td>
    </tr>
  );
};

export default TableRowSkeleton;
