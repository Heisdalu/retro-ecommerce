const Login = () => {
  return (
    <div className="bg-lg h-[calc(100vh-90px)] flex justify-center items-center">
      <div className="bg-mg w-[90%] rounded-[6px] p-1 flex flex-col md:max-w-[500px]">
        <h1 className="text-white text-[1.775rem] text-center font-Inter font-500">
          Welcome to Erewhon
        </h1>

        <div className="my-1 font-Inter">
          <div className="flex flex-col space-y-[5px]">
            <label htmlFor="email" className="text-1 text-lb">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-re p-0.5 rounded-[4px] text-1 text-white outline-none focus:shadow-fx1 focus:border-fc1"
            />
            <div className="text-red text-0.875">error message</div>
          </div>

          <div className="mt-[1rem] flex flex-col space-y-[5px]">
            <label htmlFor="password" className="text-1 text-lb">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-re text-1 p-0.5 bg-black rounded-[4px] text-white outline-none focus:shadow-fx1 focus:border-fc1"
            />
            <div className="text-red text-0.875">error message</div>
          </div>
        </div>

        <button className="authBtn mt-1">
          Log In
        </button>

        <div className="flex flex-col  border-white border-t-1 mt-[1rem] py-[1rem] border">
          <p className="text-white font-Inter text-center py-1.5">
            Don&apos;t have an account?
          </p>
          <button className="authBtn">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
