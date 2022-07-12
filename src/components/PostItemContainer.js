import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './PostItemContrainer.css';
import { setCurrentPostItemId } from '../features/posts/postSlice';
import { Button } from '@mui/material';
import CardFooterButtons from './CardFooterButtons';

function PostItemContainer({
  _id,
  creator,
  title,
  message,
  tags,
  comments,
  imageFile,
  likes,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInLocalStorage = JSON.parse(localStorage.getItem('userProfile'));
  const checkUserEmail = userInLocalStorage?.result?.email;

  const viewPost = (e) => {
    e.preventDefault();
    navigate(`/posts/${_id}`);
  };

  const handleEditing = (e) => {
    e.preventDefault();
    dispatch(setCurrentPostItemId(_id));
    navigate('/forms-create-memories');
  };

  return (
    <div className="card" id="post-item-container">
      <div className="image-icon-container">
        {creator == checkUserEmail && (
          <MoreHorizIcon className="morehoriz-icon" onClick={handleEditing} />
        )}

        <img
          src={imageFile}
          className="memory-image"
          alt={title}
          loading="lazy"
        />
      </div>
      <div
        className="card-body"
        style={{
          backgroundColor: 'blue',
          color: 'white',
          opacity: 0.5,
          fontStyle: 'italic',
          cursor: 'pointer',
        }}
        onClick={viewPost}
      >
        <small>{title}</small>
        <h5
          className="card-title"
          style={{
            backgroundColor: 'blue',
            color: 'yellow',
          }}
        >
          {tags.map((tag) => `#${tag} `)}
        </h5>
        <p
          className="card-text"
          style={{ backgroundColor: 'blue', color: 'white' }}
        >
          <span>{message.slice(0, 45)}...</span>

          <Link to={`/posts/${_id}`}>
            <span className="view">View</span>
          </Link>
        </p>
      </div>
      <CardFooterButtons
        id={_id}
        showDeleteIcon
        checkUserEmail={checkUserEmail}
        likes={likes}
        comments={comments}
        creator={creator}
      />
    </div>
  );
}

export default PostItemContainer;
