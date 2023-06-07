import PropTypes from "prop-types";

const InputForm = ({
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

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
};
