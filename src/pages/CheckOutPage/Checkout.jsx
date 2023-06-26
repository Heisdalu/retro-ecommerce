// import InputForm from "../../components/Form/InputForm";
import SelectForm from "../../components/Form/SelectForm";
import visaPic from "../../assets/visa.png";
import { useFormik } from "formik";
import { FailedToast, SuccessToast } from "../../helpers/Toast/Toast";
import { useNavigate } from "react-router";
import { initial } from "../../constants/Types";
import { updateActiveData } from "../../redux/reducers/activeUserSlice/UserProductSlice";
import { doc, updateDoc } from "@firebase/firestore";
import { db } from "../../configs/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { USERS } from "../../constants/Types";
import Loading from "../../components/Loading/Loading";
import { useState } from "react";
import { formatNumber } from "../../helpers/FormatNumber";

const intialObj = {
  country: "",
  postalCode: "",
  cardNumber: "",
  expirationMonth: "",
  expirationYear: "",
  cvv: "",
};

const validation = (values) => {
  const errors = {};

  if (values.cardNumber.length === 0 || values.cardNumber.length !== 16) {
    errors.cardNumber = "Maximum of 16 characters ";
  }

  if (values.postalCode.length === 0 || values.postalCode.length !== 5) {
    errors.postalCode = "Input a valid postal code";
  }

  if (values.country.trim() === "") {
    errors.country = "Required";
  }

  if (values.expirationMonth.length === 0) {
    errors.expirationMonth = "Required";
  }

  if (values.expirationMonth === 0 || values.expirationMonth > 12) {
    errors.expirationMonth = "Input a valid month";
  }

  if (values.expirationYear.length === 0) {
    errors.expirationYear = "Required";
  }

  if (values.expirationYear.length !== 2) {
    errors.expirationYear = "Maximum of 2 characters on year";
  }

  if (values.cvv.length !== 3) {
    errors.cvv = "Maximum of 3 characters";
  }

  return errors;
};

const Checkout = () => {
  const userDetail = useSelector((state) => state.auth.userAuthDetail);
  const { cart } = useSelector((state) => state.activeUser.data);
  const dispatch = useDispatch();
  const [click, setClicked] = useState(false);
  const navigate = useNavigate();
  const { touched, errors, handleBlur, handleChange, handleSubmit, values } =
    useFormik({
      initialValues: intialObj,
      validate: validation,
      onSubmit: async () => {
        setClicked(true);
        const docRef = doc(db, USERS, userDetail.uid);

        try {
          await updateDoc(docRef, initial);
          dispatch(updateActiveData(initial));
          SuccessToast("Order successfully placed");
          navigate("/");
        } catch (e) {
          FailedToast("Failed to order");
        }
      },
    });

  const price = cart.reduce((acc, cur) => acc + cur.price * cur.count, 0);

  return (
    <div>
      <div className="rounded-[6px] max-w-[600px] mx-auto font-Inter mt-[3rem] px-1 relative">
        <h1 className="text-1.5 font-500 md:text-center">Billing Details</h1>
        <section className="mt-[1rem] flex flex-col space-y-1 py-1">
          <div className="border flex flex-col md:flex-row md:space-x-2 space-y-1 md:space-y-[0]">
            <div className="boder-1 flex flex-col space-y-[4px] md:w-100">
              <label htmlFor="name" className="text-0.875 font-500">
                First & last name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                disabled={true}
                className="border-1 py-0.5 rounded-[6px] px-[7px] font-Inter capitalize cardBtn"
                value={userDetail.displayName}
              />
            </div>
            <div className="boder-1 flex flex-col space-y-[4px] md:w-100">
              <label htmlFor="Email" className="text-0.875 font-500">
                Email
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                disabled={true}
                className="border-1 py-0.5 rounded-[6px] px-[7px] font-Inter cardBtn"
                value={userDetail.email}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1 md:mt-1 md:space-y-[0] md:flex-row md:grid md:grid-cols-2  md:space-x-1 md:items-center ">
            <SelectForm
              value={values.country}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched}
              errors={errors}
            />

            <div className="flex flex-col space-y-[4px] md:self-start">
              <label htmlFor="postalCode" className="text-0.875 font-500">
                Postal code
              </label>
              <input
                type="number"
                name="postalCode"
                id="postalCode"
                maxLength="5"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postalCode}
                className="border-1 py-0.5 rounded-[6px] px-[7px] font-Inter cardBtn "
              />
              {touched.postalCode && (
                <div className="text-red text-0.75">{errors.postalCode}</div>
              )}
            </div>
          </div>
        </section>

        <section className="mt-2 grid">
          <h1 className="text-1.5 font-500 md:text-center mb-1 ">
            Payment method
          </h1>
          <p className="font-Inter font-700">
            You are paying: ₦ {formatNumber(price)}
          </p>
          <div className="flex flex-col space-y-[4px] mt-1">
            <label htmlFor="cardNumber" className="text-0.875 font-500">
              Card Number
            </label>
            <div className="relative">
              <input
                type="number"
                name="cardNumber"
                id="cardNumber"
                maxLength="16"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cardNumber}
                className="w-100 tracking-[3px] border-1 py-0.5 rounded-[6px] px-[7px] font-Inter cardBtn pr-[20px]"
              />
              <img
                src={visaPic}
                alt=""
                className="h-[32px] w-[32px] absolute bottom-[5px] right-[10px] md:right-[15px]"
              />
            </div>
            {touched.cardNumber && (
              <div className="text-red text-0.75">{errors.cardNumber}</div>
            )}
          </div>

          <div className="mt-1 grid grid-cols-2 [grid-gap:2rem]">
            <div className="flex flex-col space-y-[4px]">
              <label htmlFor="expirationMonth" className="text-0.875 font-500">
                Expiration code
              </label>
              <div className="grid grid-cols-2 [grid-gap:1rem]">
                <input
                  type="number"
                  name="expirationMonth"
                  id="expirationMonth"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.expirationMonth}
                  placeholder="month"
                  maxLength="2"
                  className="placeholder:text-0.875 md:placeholder:text-1 border-1 py-0.5 rounded-[6px] px-[7px] font-Inter cardBtn "
                />
                <input
                  type="number"
                  name="expirationYear"
                  id="expirationYear"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.expirationYear}
                  placeholder="year"
                  maxLength="2"
                  className="placeholder:text-0.875 md:placeholder:text-1 border-1 py-0.5 rounded-[6px] px-[7px] font-Inter cardBtn "
                />
              </div>
              {touched.expirationMonth && (
                <div className="text-red text-0.75">
                  {errors.expirationMonth}
                </div>
              )}
              {touched.expirationYear && (
                <div className="text-red text-0.75">
                  {errors.expirationYear}
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-[4px] ">
              <label htmlFor="cvv" className="text-0.875 font-500">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cvv}
                maxLength="3"
                className="border-1 py-0.5 rounded-[6px] px-[7px] font-Inter cardBtn "
              />
              {touched.cvv && (
                <div className="text-red text-0.75">{errors.cvv}</div>
              )}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="my-2 w-[200px] h-[56px] mx-auto py-1 text-white bg-black rounded-[6px]"
          >
            Place Order
          </button>
        </section>
      </div>
      {click && (
        <div className=" bg-mo top-[0] z-[10] fixed h-[100vh] w-100 grid place-items-center">
          <Loading style="h-[100px]" />
        </div>
      )}
    </div>
  );
};
export default Checkout;
