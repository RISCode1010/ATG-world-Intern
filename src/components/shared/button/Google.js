import React from "react";
import gl from "../../../assets/imgs/SG.png";

const Google = () => {
  return (
    <div className="d-flex border justify-content-center align-items-center  rounded">
      <div>
        <img src={gl} alt="" className="img-fluid icon " />
      </div>
      <button className="btn profile_name">Sign up with Google</button>
    </div>
  );
};

export default Google;
