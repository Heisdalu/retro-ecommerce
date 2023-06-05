import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Loading from "../../components/Loading/Loading";
import { SuccessToast, FailedToast } from "../../helpers/Toast/Toast";
import useSignIn from "../../hooks/auth/useSignIn";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const intialObj = {
  email: "",
  password: "",
};

const yupValidate = Yup.object({
  email: Yup.string()
    .email("Input a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const { signIn, data, error, errorMessage, loading } = useSignIn();
  const navigate = useNavigate();

  const { handleBlur, handleSubmit, values, handleChange, touched, errors } =
    useFormik({
      initialValues: intialObj,
      validationSchema: yupValidate,
      onSubmit: async (value, formikBag) => {
        signIn(value.email, value.password);
        formikBag.resetForm();
      },
    });

  useEffect(() => {
    // if user is authenticated... return to home page
    if (Object.keys(data).length > 0) {
      SuccessToast("Logged in successfully");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
    //if error occurs in authentication
    if (error) {
      FailedToast(errorMessage);
    }
  }, [data, error, errorMessage, navigate]);

  return (
    <div className="bg-white h-[calc(100vh-90px)] flex justify-center items-center">
      <div className="bg-mg w-[90%] rounded-[6px] p-1 flex flex-col md:max-w-[500px]">
        <h1 className="text-black text-[1.775rem] text-center font-Inter font-500">
          Welcome to Erewhon
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="my-1 font-Inter">
            <div className="flex flex-col space-y-[5px]">
              <label htmlFor="email" className="text-1 text-black">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-re p-0.5 rounded-[4px] text-1 outline-none focus:shadow-fx1 focus:border-fc1 border-1 ${
                  touched.email && errors.email && "border-red"
                }`}
              />
              {touched.email && (
                <div className="text-red text-0.875">{errors.email}</div>
              )}
            </div>

            <div className="mt-[1rem] flex flex-col space-y-[5px]">
              <label htmlFor="password" className="text-1 text-black">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-re text-1 p-0.5 bg-black rounded-[4px] border-1 outline-none focus:shadow-fx1 focus:border-fc1 ${
                  touched.password && errors.password && "border-red"
                }`}
              />
              {touched.password && (
                <div className="text-red text-0.875">{errors.password}</div>
              )}
            </div>
          </div>

          <button
            className="authBtn mt-1 text-white bg-black mx-auto h-[56px] w-[111px] centerPos"
            type="submit"
            disabled={loading && true}
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
