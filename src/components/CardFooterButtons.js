import { Button } from '@mui/material';
import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import DeleteButton from './DeleteButton';
import { disLikePostItem, likePostItem } from '../actions/postActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CardFooterButtons({
  id,
  creator,
  checkUserEmail,
  likes,
  comments,
}) {
  const dispatch = useDispatch();
  const [hasLiked, setHasLiked] = useState(false);
  const [isLikeIncrease, setIsLikeIncrease] = useState(true);

  const handleLike = (e) => {
    e.preventDefault();
    setHasLiked(!hasLiked);
    setIsLikeIncrease(!isLikeIncrease);
    if (isLikeIncrease) {
      dispatch(likePostItem(id));
    } else {
      dispatch(disLikePostItem(id));
    }
  };
  return (
    <div className="card-footer">
      <small className="text-muted d-flex justify-content-between align-items-center">
        <Button variant="text">
          <span className="d-flex align-items-center">
            <span onClick={handleLike} style={{ cursor: 'pointer' }}>
              {hasLiked ? (
                <FavoriteIcon style={{ color: 'blue', opacity: 0.5 }} />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </span>
            <span className="ml-2">{likes}</span>
          </span>
        </Button>

        {/* Comments  */}
        <Button variant="text">
          <Link to={`/posts/${id}`}>
            <span className="d-flex align-items-center">
              <span>
                <MessageOutlinedIcon />
              </span>
              <span className="ml-2 mb-2">{comments.length}</span>
            </span>
          </Link>
        </Button>

        {/* Delete button  */}
        {creator == checkUserEmail ? <DeleteButton id={id} /> : <></>}
      </small>
    </div>
  );
}
