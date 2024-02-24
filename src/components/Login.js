import React, { useContext } from "react";
import img from "../assets/imgs/form.png";
import Google from "./shared/button/Google";
import Facebook from "./shared/button/Facebook";
import Forget from "./shared/button/Forget";
import InputLoginGroup from "./form/InputLoginGroup";
import { AuthContext } from "../context/AuthContextProvider";

const Login = ({ handleForm }) => {
  const { handleLogin } = useContext(AuthContext);
  const handleFormSet = (e) => {
    e.preventDefault();
    handleLogin();
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4> Sign In </h4>
        <p className="mb-0 login_text">
          Don’t have an account yet?
          <span
            className="text-primary px-1 input_toggle"
            onClick={() => handleForm("Register")}
          >
            Create new for free!
          </span>
        </p>
      </div>
      <div className="row gap-4 g-0 ">
        <div className="col ">
          <form className="d-flex flex-column" onSubmit={handleFormSet}>
            <InputLoginGroup />
            <button className="rounded-pill d-block w-full btn btn-primary my-3 fw-semibold">
              Sign In
            </button>
          </form>
          <Facebook />
          <Google />
          <Forget />
        </div>
        <div className="col ">
          <div className="mb-2">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
