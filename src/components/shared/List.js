import React, { useState } from "react";

const List = ({ user }) => {
  const [active, setActive] = useState(false);

  return (
    <li className="d-flex align-items-center gap-3 py-2">
      <img src={user.img} alt="" className="img-fluid user_img" />
      <div className="w-100 d-flex justify-content-between align-items-center ">
        <p className="mb-0 user_name">{user.name}</p>
        <button
          className={`btn rounded-pill btn_follow ${
            active ? "btn_follow_active" : ""
          }`}
          onClick={() => setActive(!active)}
        >
          {active ? "Followed" : "Follow"}
        </button>
      </div>
    </li>
  );
};

export default List;
