import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Link to="/loginPage">
        <button className="mt-3 font-medium">Login</button>
      </Link>
    </div>
  );
};

export default Login;
