type Props = {
  message: string;
};

const ErrorMessageWrapper = ({ message }: Props) => {
  return <div className="font-semibold text-sm text-error mt-2">{message}</div>;
};

export default ErrorMessageWrapper;
