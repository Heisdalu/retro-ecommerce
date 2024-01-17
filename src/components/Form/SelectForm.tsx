import { FormikProps } from "formik";
import { countries } from "../../constants/countries";
import {
  checkOutFomrikValueType,
  errorCheckOutFomrikValueType,
  touchedCheckOutFomrikValueType,
} from "../../@types";
import { FC, FocusEvent, ChangeEvent } from "react";

interface Props {
  value: string;
  touched: touchedCheckOutFomrikValueType;
  errors: errorCheckOutFomrikValueType;
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: FocusEvent<any, Element>) => void;
}

const SelectForm: FC<Props> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  value,
}) => {

  const all = countries.map((el) => (
    <option key={el} value={el} label={el}>
      {el}
    </option>
  ));
  return (
    <div
      className="flex flex-col space-y-[4px] font-Inter md:self-start
      "
    >
      <h1 className="text-0.875 font-500">Country</h1>
      <select
        name="country"
        id="country"
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        className="border-1 py-0.5 md:max-w-[267px] h-[42px] rounded-[6px] px-[5px]"
      >
        <option value="">Select a country</option>
        {all}
      </select>
      {touched.country && (
        <div className="text-red text-0.75">{errors.country}</div>
      )}
    </div>
  );
};
export default SelectForm;
