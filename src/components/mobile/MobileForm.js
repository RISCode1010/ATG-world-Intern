import Modal from "react-bootstrap/Modal";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react";

export default function MobileForm(props) {
  const [isRegistered, setIsRegistered] = useState("Register");
  const handleForm = (pull) => {
    setIsRegistered(pull);
  };

  return (
    <Modal {...props} size="lg" className="mobile" animation={false}>
      {isRegistered === "Register" && <Register handleForm={handleForm} />}
      {isRegistered === "Login" && <Login handleForm={handleForm} />}
    </Modal>
  );
}
