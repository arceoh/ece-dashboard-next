import { FaCheck } from "react-icons/fa";
import { MdDoNotDisturb } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { MdFiberNew } from "react-icons/md";

interface Props {
  status: string;
}

interface StatusMap {
  icon: JSX.Element;
  color: string;
}

const statusMap: { [key: string]: StatusMap } = {
  New: {
    icon: <MdFiberNew />,
    color: "text-blue-500 bg-blue-100/60",
  },
  Pending: {
    icon: <MdPendingActions />,
    color: "text-yellow-600 bg-yellow-100/60",
  },
  Enrolled: {
    icon: <FaCheck />,
    color: "text-green-600 bg-emerald-100/60",
  },
  Denied: {
    icon: <MdDoNotDisturb />,
    color: "text-rose-500 bg-rose-100/60",
  },
};
const SurveyStatus = ({ status = "New" }: Props) => {
  return (
    <div
      className={`${statusMap[status].color} inline-flex items-center px-3 py-1 rounded-full gap-x-2  dark:bg-gray-800 text-center mx-auto`}
    >
      <h2 className="text-sm font-semibold">{status}</h2>
    </div>
  );
};

export default SurveyStatus;
