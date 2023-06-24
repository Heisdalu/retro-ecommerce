import { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpValidation } from "../../validations/SignUpValidation";
import InputForm from "../../components/Form/InputForm";
import useSignUp from "../../hooks/auth/useSignUp";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { SuccessToast, FailedToast } from "../../helpers/Toast/Toast";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};
const SignUp = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const { signUp, loading, error, errorMessage } = useSignUp();
  const { handleSubmit, handleBlur, handleChange, errors, values, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpValidation,
      onSubmit: (values) => {
        signUp(
          values.firstname,
          values.lastname,
          values.email,
          values.password
        );
      },
    });

  useEffect(() => {
    if (isAuthenticated) {
      SuccessToast("Logged in successfully");
      setTimeout(() => {
        navigate("/");
      }, 500);
    }

    if (error) {
      FailedToast(errorMessage);
    }
  }, [error, errorMessage, isAuthenticated, navigate]);

  return (
    <div className="bg-white pt-2 md:pt-[3rem]">
      <div className="bg-white w-[90%] mx-auto rounded-[6px] p-1 flex flex-col md:max-w-[500px]">
        <h1 className="text-black text-[1.775rem] text-center font-Inter font-500">
          Welcome to Retro
        </h1>

        <form onSubmit={handleSubmit} className="mt-1">
          <div className="my-1 font-Inter flex flex-col space-y-[0.8rem]">
            <div className="flex flex-col space-y-[5px]">
              <InputForm
                label="firstname"
                title="First Name"
                inputType="text"
                inputValue={values.firstname}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.firstname}
                touched={touched.firstname}
              />
            </div>

            <div className="flex flex-col space-y-[5px]">
              <InputForm
                label="lastname"
                title="Last Name"
                inputType="text"
                inputValue={values.lastname}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.lastname}
                touched={touched.lastname}
              />
            </div>

            <div className="flex flex-col space-y-[5px]">
              <InputForm
                label="email"
                title="Email"
                inputType="email"
                inputValue={values.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              />
            </div>

            <div className="mt-[1rem] flex flex-col space-y-[5px]">
              <InputForm
                label="password"
                title="Password"
                inputType="password"
                inputValue={values.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
              />
            </div>
          </div>
          {
            <button
              className="centerPos authBtn my-[2rem] mx-auto flex bg-black text-white h-[56px] w-[123px]"
              type="submit"
              disabled={loading}
            >
              {loading ? <Loading /> : "Sign Up"}
            </button>
          }
        </form>

        <div className="flex flex-col  border-black border-t-1 mt-[0.5rem] py-[1rem] border">
          <p className="text-black font-Inter text-center py-1.5">
            Already have an account?
          </p>
          <Link to="/login" className="authBtn text-white bg-black">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

SignUp.propTypes = {
  isAuthenticated: PropTypes.bool,
};
