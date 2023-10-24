import { FaCheck } from "react-icons/fa";
import { MdDoNotDisturb } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { MdFiberNew } from "react-icons/md";

type Props = {
  status: string;
};

interface StatusMap {
  icon: JSX.Element;
  color: string;
}

const statusMap: { [key: string]: StatusMap } = {
  New: {
    icon: <MdFiberNew />,
    color: "badge-info",
  },
  Pending: {
    icon: <MdPendingActions />,
    color: "badge-warning",
  },
  Enrolled: {
    icon: <FaCheck />,
    color: "badge-success",
  },
  Denied: {
    icon: <MdDoNotDisturb />,
    color: "badge-error",
  },
};
const SurveyStatus = ({ status = "New" }: Props) => {
  return (
    <div className={`badge ${statusMap[status].color}`}>
      <p>{status}</p>
    </div>
  );
};

export default SurveyStatus;
