import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Join = () => {
  const [isRegistered, setIsRegistered] = useState("Register");

  const handleForm = (pull) => {
    setIsRegistered(pull);
  };
  return (
    <div className="p-4">
      {isRegistered === "Register" && <Register handleForm={handleForm} />}
      {isRegistered === "Login" && <Login handleForm={handleForm} />}
    </div>
  );
};

export default Join;
