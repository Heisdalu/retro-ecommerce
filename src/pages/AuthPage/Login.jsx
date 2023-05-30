const Login = () => {
  return (
    <div className="bg-lg h-[calc(100vh-90px)] flex justify-center items-center">
      <div className="bg-mg w-[90%] p-1 border-1 flex flex-col">
        <h1 className="text-white text-[1.775rem] text-center font-Inter font-500">
          Welcome to Erewhon
        </h1>

        <div className="my-2 font-Inter">
          <div className="flex flex-col space-y-[5px]">
            <label htmlFor="email" className="text-1 text-lb">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-re p-0.5 rounded-[4px] text-1 text-white outline-none"
            />
            <div className="text-red text-0.875">error message</div>
          </div>

          <div className="mt-[1.5rem] flex flex-col space-y-[5px]">
            <label htmlFor="password" className="text-1 text-lb">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-re text-1 p-0.5 bg-black rounded-[4px] text-white outline-none"
            />
            <div className="text-red text-0.875">error message</div>
          </div>
        </div>

        <button className="bg-white text-black py-1 px-2 rounded-[6px] mx-auto font-700">
          Log In
        </button>
      </div>
    </div>
  );
};
export default Login;
