import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const InputRegisterGroup = () => {
  return (
    <div className="form border rounded ">
      <div className="d-flex ">
        <li className="list-group-item form_input border-end">
          <input type="text" placeholder="First Name" />
        </li>
        <li className="list-group-item form_input">
          <input type="text" placeholder="Last Name" />
        </li>
      </div>
      <li className="list-group-item form_input ">
        <input type="email" placeholder="Email" />
      </li>
      <li className="list-group-item form_input d-flex align-items-center">
        <input type="password" placeholder="Password" />
        <AiOutlineEye />
      </li>
      <li className="list-group-item form_input">
        <input type="password" placeholder="Confirm Password" />
      </li>
    </div>
  );
};

export default InputRegisterGroup;
