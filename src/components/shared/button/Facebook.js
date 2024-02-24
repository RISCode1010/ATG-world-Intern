import React from "react";
import fb from "../../../assets/imgs/FB.png";

const Facebook = () => {
  return (
    <div className="d-flex border justify-content-center align-items-center  rounded mb-2">
      <div className="">
        <img src={fb} alt="" className="img-fluid icon" />
      </div>
      <button className="btn profile_name">Sign up with Facebook</button>
    </div>
  );
};

export default Facebook;
