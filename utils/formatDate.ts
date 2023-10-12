import dayjs from "dayjs";

const formatDate = (isoBirthday: string) => {
  return dayjs(isoBirthday).format("MMMM D, YYYY");
};

export default formatDate;
