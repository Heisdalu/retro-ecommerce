import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import InputForm from "../../components/Form/InputForm";
import { SuccessToast, FailedToast } from "../../helpers/Toast/Toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoginValidate } from "../../validations/LoginValidation";
import useLogin from "../../hooks/auth/useLogin";
import PropTypes from "prop-types";

const intialObj = {
  email: "",
  password: "",
};

const Login = ({ isAuthenticated }) => {
  const { Login, error, errorMessage, loading } = useLogin();
  const navigate = useNavigate();

  const { handleBlur, handleSubmit, values, handleChange, touched, errors } =
    useFormik({
      initialValues: intialObj,
      validationSchema: LoginValidate,
      onSubmit: async (value) => {
        Login(value.email, value.password);
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
    <div className="bg-white h-[calc(100vh-90px)] flex justify-center items-center">
      <div className="bg-mg w-[90%] rounded-[6px] p-1 flex flex-col md:max-w-[500px]">
        <h1 className="text-black text-[1.775rem] text-center font-Inter font-500">
          Login to Retro
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="my-1 font-Inter">
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

          <button
            className="authBtn mt-1 text-white bg-black mx-auto h-[56px] w-[111px] centerPos"
            type="submit"
            disabled={loading}
          >
            {loading ? <Loading /> : "Log in"}
          </button>
        </form>

        <div className="flex flex-col  border-t-1 mt-[1rem] py-[1rem] border">
          <p className="text-black font-Inter text-center py-1.5">
            Don&apos;t have an account?
          </p>
          <Link to="/sign-up" className="authBtn text-white bg-black">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
};
