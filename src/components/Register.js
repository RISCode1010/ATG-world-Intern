import React from "react";
import img from "../assets/imgs/form.png";
import Facebook from "./shared/button/Facebook";
import Google from "./shared/button/Google";
import InputRegisterGroup from "./form/InputRegisterGroup";

const Register = ({ handleForm }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4>Create Account</h4>
        <p className="mb-0 login_text">
          Already have an account?{" "}
          <span
            className="text-primary input_toggle"
            onClick={() => {
              handleForm("Login");
            }}
          >
            Sign In
          </span>
        </p>
      </div>
      <div className="row gap-4 g-0 ">
        <div className="col ">
          <form className="d-flex flex-column">
            <InputRegisterGroup />
            <button className="rounded-pill d-block w-full btn btn-primary my-3 fw-semibold">
              Create Account
            </button>
          </form>
          <Facebook />
          <Google />
        </div>
        <div className="col ">
          <div className="mb-2">
            <img src={img} alt="" className="img-fluid" />
          </div>
          <p className="agree">
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
