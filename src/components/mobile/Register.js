import React from "react";

import Modal from "react-bootstrap/Modal";
import InputRegisterGroup from "../form/InputRegisterGroup";
import Facebook from "../shared/button/Facebook";
import Google from "../shared/button/Google";
const Register = ({ handleForm }) => {
  return (
    <>
      <Modal.Header closeButton className="border-0">
        <Modal.Title id="contained-modal-title-vcenter">
          Create Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="col ">
          <form className="d-flex flex-column">
            <InputRegisterGroup />
            <div className="d-flex align-items-center justify-content-between">
              <button className="rounded-pill d-block w-full btn btn-primary profile_name my-3 px-5 fw-semibold">
                Create Account
              </button>
              <p
                className="m-0 underline profile_name "
                onClick={() => {
                  handleForm("Login");
                }}
              >
                or, Sign In
              </p>
            </div>
          </form>
          <Facebook />
          <Google />
        </div>
        <p className="agree px-5 text-center my-3">
          By signing up, you agree to our Terms & conditions, Privacy policy
        </p>
      </Modal.Body>
    </>
  );
};

export default Register;
