type Props = {
  title: string;
  value: boolean;
  onChange: (title: string) => void;
};

const ColumnSelectCheckbox = ({ title, value, onChange }: Props) => {
  return (
    <div className="relative">
      <label
        htmlFor={title}
        className="rounded flex items-start justify-between px-2 py-2 font-medium text-gray-900 select-none dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:cursor-pointer"
      >
        <div className="font-medium">{title}</div>
        <div className="flex items-center h-6 ml-3">
          <input
            id={title}
            name={title}
            type="checkbox"
            checked={value}
            onChange={() => onChange(title)}
            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-600"
          />
        </div>
      </label>
    </div>
  );
};

export default ColumnSelectCheckbox;
