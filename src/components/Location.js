import React, { useContext, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { AuthContext } from "../context/AuthContextProvider";
import UserList from "./shared/UserList";

const Location = () => {
  const { user } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);

  return (
    <div className="mt-4  d-none d-md-block">
      <div className="d-flex gap-2 align-items-center py-2  border-bottom">
        <span>
          <GoLocation />
        </span>
        {edit ? (
          <input
            type="text"
            name="location"
            id=""
            className="w-100 find_location"
            placeholder="Enter you location"
          />
        ) : (
          <p className="m-0 w-100 location">Noida, India</p>
        )}

        <span onClick={() => setEdit(!edit)} className="fs-5 input_toggle">
          {edit ? <MdClose /> : <RiPencilFill />}
        </span>
      </div>
      <div className="d-flex gap-3 mt-4 info_content">
        <span>
          <AiOutlineInfoCircle />
        </span>
        <p className="info">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
      {user && (
        <div className="mt-5 mb-2">
          <p className="text-uppercase recommended">
            <BiLike className="fs-5" /> REcommended Groups
          </p>
          <UserList />
          <div className="mt-5 text-end">
            <a href="/" className="text-primary  link_more">
              See More...
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
