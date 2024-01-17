import { FC, ChangeEvent, FocusEvent } from "react";

interface InputFormProps {
  label: string;
  title: string;
  inputType: string;
  inputValue: string;
  error: string | undefined;
  touched: boolean | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: FocusEvent) => void;
}

const InputForm: FC<InputFormProps> = ({
  label,
  title,
  inputType,
  inputValue,
  handleChange,
  handleBlur,
  error,
  touched,
}) => {
  return (
    <>
      <label htmlFor={label} className="text-1 text-black">
        {title}
      </label>
      <input
        type={inputType}
        name={label}
        id={label}
        onChange={handleChange}
        onBlur={handleBlur}
        value={inputValue}
        className={`authInput ${
          touched && error && "border-red focus:border-red focus:shadow-fx2"
        }`}
      />
      {touched && <div className="text-red text-0.875">{error}</div>}
    </>
  );
};
export default InputForm;

