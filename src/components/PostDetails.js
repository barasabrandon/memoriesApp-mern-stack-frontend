import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../actions/postActions';
import CommentForm from './Form/CommentForm';

import './PostDetails.css';
import PostItemContainer from './PostItemContainer';

function PostDetails() {
  const { postItem, postsItems } = useSelector((state) => state.post);
  const { id } = useParams();
  const dispatch = useDispatch();
  const commentsRef = useRef();

  useEffect(() => {
    dispatch(getPostById(id));
  }, [id]);

  const filteredPostItems = postsItems.filter((item) =>
    item.title.toLowerCase().includes(postItem.title.toLowerCase())
  );

  const finalFilteredItems = filteredPostItems.filter(
    (item) => item._id !== postItem._id
  );

  return (
    <>
      <div className="card m-4">
        <div className="card-body">
          <div className="container">
            <div className="container-image">
              <img src={postItem.imageFile} alt="" />
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <h5>{postItem.title}</h5>
                <small>{postItem.tags}</small>
              </div>

              <p>{postItem.message}</p>
            </div>
          </div>
          <div className="comments">
            <h3 className="comments-container-title">Comments</h3>
            <div className="container-comments">
              <div className="comments-container">
                {postItem?.comments?.map((item, index) => (
                  <div key={index} className="comments-container-text">
                    <small>{item.split(':')[0]}</small>
                    <p>{item.split(':')[1]}</p>
                  </div>
                ))}
                <div ref={commentsRef} style={{ marginBottom: '100px' }} />
              </div>
              <CommentForm id={id} commentsRef={commentsRef} />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="related-topics">
        <div>Related Memories </div>
        <div className="related-topics-count">{finalFilteredItems?.length}</div>
      </div>
      <div className="row justify-content-center mt-3 mb-">
        {finalFilteredItems?.map((item, i) => (
          <PostItemContainer key={i} {...item} />
        ))}
      </div>
    </>
  );
}

export default PostDetails;
