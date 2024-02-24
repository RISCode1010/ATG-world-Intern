import React, { useContext } from "react";
import logo from "../../assets/imgs/logo.png";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AuthContext } from "../../context/AuthContextProvider";

const Header = ({ setModalShow }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container-xxl header py-3">
      <div className="container ">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img src={logo} alt="logo" className="logo " />
          </div>
          <div className="d-flex justify-content-center ">
            <div className="search-box  ">
              <span>
                <FiSearch />
              </span>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for your favorite groups in ATG "
                className=" d-none d-lg-flex"
              />
            </div>
          </div>
          <div className="login d-none d-md-block ">
            {user ? (
              <div className="d-flex align-items-center gap-3">
                <img src={user.img} alt="" className="img-fluid user_img" />

                <p className="mb-0 user_name">
                  {user.name}
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </p>
              </div>
            ) : (
              <p className="fw-semibold text-end m-0 ">
                Create account. <span className="text-primary" onClick={() => setModalShow(true)}>It’s free!</span>
                <IoMdArrowDropdown />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
