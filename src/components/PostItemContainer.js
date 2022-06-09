import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";

import {
  increaseLikeCount,
  decreaseLikeCount,
} from "../features/posts/postSlice";
import "./PostItemContrainer.css";

function PostItemContainer({
  id,
  creator,
  title,
  message,
  tags,
  comments,
  imageFile,
  likeCount,
  createdAt,
}) {
  const dispatch = useDispatch();
  const [isLikeIncrease, setIsLikeIncrease] = useState(true);
  const navigate = useNavigate();

  const handleLikeCount = (e) => {
    e.preventDefault();
    setIsLikeIncrease(!isLikeIncrease);
    if (isLikeIncrease) {
      dispatch(increaseLikeCount({ id }));
    } else {
      dispatch(decreaseLikeCount({ id }));
    }
  };

  const viewPost = (e) => {
    e.preventDefault();
    navigate(`/memories/${id}`);
  };

  return (
    <div className="col-lg-3 col-md-3 col-sm-10 m-sm-3 m-1 ">
      <div className="card">
        <img
          src={imageFile}
          className="image-responsive"
          alt="e"
          style={{ height: "170px", margin: "10px" }}
        />

        <div
          className="card-body"
          style={{
            backgroundColor: "blue",
            color: "white",
            opacity: 0.5,
            fontStyle: "italic",
            cursor: "pointer",
          }}
          onClick={viewPost}
        >
          <small>{title}</small>
          <h5
            className="card-title"
            style={{
              backgroundColor: "blue",
              color: "yellow",
            }}
          >
            {tags.map((tag) => `#${tag} `)}
          </h5>
          <p
            className="card-text"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            {message}
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted d-flex justify-content-between align-items-center">
            <span className="d-flex align-items-center">
              <span onClick={handleLikeCount} style={{ cursor: "pointer" }}>
                {isLikeIncrease ? (
                  <FavoriteBorderOutlinedIcon />
                ) : (
                  <FavoriteIcon style={{ color: "blue", opacity: 0.5 }} />
                )}
              </span>
              <span className="ml-2">
                {likeCount > 1 ? `${likeCount} Likes` : `${likeCount} Like`}
              </span>
            </span>
            <span>{moment(createdAt).fromNow()}</span>
          </small>
        </div>
      </div>
    </div>
  );
}

export default PostItemContainer;
