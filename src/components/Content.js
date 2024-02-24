import { posts } from "../data/posts";
import { BiCalendarEvent } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import DropdownMenuDot from "./shared/Dropdown";
import { BsThreeDots } from "react-icons/bs";

const Content = () => {
  return (
    <div className="d-flex  flex-column">
      {posts.map((post, i) => {
        return (
          <div key={i} className="custom_card mb-4">
            <div>
              <img
                src={post?.contentImg}
                alt=""
                className="img-fluid card_img"
              />
            </div>
            <div className="content_body">
              <p className="card_description">
                {post?.icons} {post?.category}
              </p>
              <div className="d-flex justify-content-between align-items-start gap-3 py-1 ">
                <h3 className=" card_tittle  fw-bold ">{post?.title}</h3>
                <DropdownMenuDot
                  title={["Edit", "Write", "Options"]}
                  align
                  element={<BsThreeDots className="fs-4" />}
                />
              </div>
              {post.describe && (
                <p className="lead card_description py-1">{post?.describe}</p>
              )}
              {post.date && (
                <div className="d-flex gap-5 ">
                  <p className=" mb-0 d-flex gap-1 align-items-center">
                    <BiCalendarEvent />
                    <span className="views">{post?.date}</span>
                  </p>
                  {post.location && (
                    <p className=" mb-0 d-flex views gap-1 align-items-center py-2">
                      <GoLocation />
                      <span>{post?.location}</span>
                    </p>
                  )}
                </div>
              )}
              {post.link && (
                <button className=" card_link views mt-2">{post.link}</button>
              )}

              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex align-items-center gap-3 flex-fill">
                  <img
                    src={post.profileImg}
                    alt=""
                    className="img-fluid profile_img"
                  />

                  <div className="d-md-flex align-items-center flex-fill ">
                    <p className="mb-0 profile_name flex-fill ">{post.name}</p>
                    <p className="m-0 d-flex align-items-center px-md-2 gap-2">
                      <AiOutlineEye className="d-none d-md-flex" />{" "}
                      <span className="views">1.7k Views</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3  align-items-center ">
                  <span className="icon icon_active">
                    <BsShareFill />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
