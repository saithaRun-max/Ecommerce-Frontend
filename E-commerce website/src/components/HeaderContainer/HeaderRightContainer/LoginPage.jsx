import React from "react";

const LoginPage = () => {
  return (
    <div className="w-screen h-full ">
      <div className="w-[400px] md:w-[460px] h-[500px] bg-gray-300 mx-auto mt-14 rounded-md">
        <div className="p-10">
          <h1 className="font-bold text-center text-2xl">Login</h1>
          <div className="flex align-middle flex-col">
            <input
              className="h-12 w-full rounded-md font-semibold placeholder:font-semibold text-center text-zinc-800 outline-none border-2 border-gray-700 mb-8 mt-20 "
              placeholder="Email Address"
              type="text"
              name=""
              id=""
            />
            <input
              className="h-12 w-full rounded-md font-semibold placeholder:font-semibold text-center text-zinc-800 outline-none mb-8 border-2 border-gray-700"
              placeholder="Password"
              type="password"
              name=""
              id=""
            />
            <button className="w-full h-12 mt-8 rounded-md font-semibold text-white bg-emerald-600"> Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
