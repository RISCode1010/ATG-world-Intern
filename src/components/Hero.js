import React, { useContext, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AuthContext } from "../context/AuthContextProvider";
import MobileForm from "./mobile/MobileForm";

const Hero = () => {
  const { user } = useContext(AuthContext);
  const [modalShow, setModalShow] = useState(false);
  return (
    <section className="hero">
      <div className="hero_content h-100  container-xxl py-4 d-flex flex-column ">
        <div className=" flex-fill ">
          <div className="d-flex justify-content-between align-items-start  d-md-none">
            <span className="fs-4">
              <AiOutlineArrowLeft />
            </span>
            <button
              className="btn text-light border d-flex align-items-center gap-2"
              onClick={() => setModalShow(true)}
            >
              {user ? "Leave Group" : "Join Group"}
            </button>
          </div>
        </div>
        <div className="py-4">
          <h2 className="h2 fw-bold">Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <MobileForm show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
};

export default Hero;
