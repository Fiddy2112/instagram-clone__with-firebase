import React from "react";
import "./Style-PostItem.css";
import { AVATAR, IMG_P_1 } from "../../assets/ImageList";
import Avatar from "@material-ui/core/Avatar";

export default function PostItem({ data }) {
  return (
    <div className="post__container">
      {/* Header -> Username + Avatar + Local */}
      <div className="post__header">
        <div className="post__header--block-left">
          <div className="post__header--avatar">
            <Avatar alt="Remy Sharp" src={data.avatarUrl} />
          </div>
        </div>
        <div className="post__header--block-right">
          <div className="post__header--username">
            <a href="/#">{data.userName}</a>
          </div>
          <div className="post__header--more-option">
            <span>
              <i className="bx bx-dots-horizontal-rounded"></i>
            </span>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="post__image">
        <img src={data.imageUrl} alt="p-1" />
      </div>
      <div className="post__group-bottom">
        {/* Group of interactive icons */}
        <div className="post__group-bottom">
          <div className="icons">
            <div className="icons-left">
              <span>
                <i className="bx bx-heart"></i>
              </span>
              <span>
                <i className="bx bx-message-rounded"></i>
              </span>
              <span>
                <i className="bx bx-paper-plane"></i>
              </span>
            </div>
            <div className="icons-right">
              <span>
                <i className="bx bx-bookmark"></i>
              </span>
            </div>
          </div>
          <div className="post__interactive-info">
            <a href="/#">
              <span>321</span> lượt thích
            </a>
          </div>
        </div>
        {/* Username + Caption */}
        <div className="post__caption">
          <div className="post__caption--user">
            <span className="user-name">
              <a href="/#">{data.userName}</a>
            </span>
            &nbsp;
            <span
              dangerouslySetInnerHTML={{ __html: data.caption }}
              className="caption"
            ></span>
          </div>
          {/* Time */}
          <p className="post__caption--time">
            <span>1</span> Ngày trước
          </p>
        </div>
        {/* input field for comment */}
        <div className="post__comment">
          <form>
            <span>
              <i className="bx bx-smile"></i>
            </span>
            <input type="text" placeholder="Thêm bình luận..." />
            <button className="btn btn-post-comment">Đăng</button>
          </form>
        </div>
      </div>
    </div>
  );
}
