import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentPost, getPostById } from '../../actions/postActions';

import hikingVideo from '../../assets/videos/hikingVideo.mp4';
import CommentForm from './Form/CommentForm';

export default function Statics({ id }) {
  const { postItem, postsItems } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const commentsRef = useRef();
  const [comment, setComment] = useState('');
  const [name, setName] = useState('anonymous');
  const userInLocalStorage = JSON.parse(localStorage.getItem('userProfile'));
  const checkUserName = userInLocalStorage?.result?.name;

  useEffect(() => {
    if (checkUserName) {
      setName(`${checkUserName}`);
    } else {
      setName('anonymous');
    }
  }, [checkUserName]);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const finalComment = `${name}: ${comment}`;
    dispatch(commentPost(finalComment, id));
    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <hr />
      <div className="statics-container">
        <div className="count-container">
          <video
            className="hiking-video"
            src={hikingVideo}
            autoPlay
            loop
            muted
          />
          <div className="count-container-texts">
            <div>Brandon Wanambisi</div>
            <div>Likes: 90</div>
            <div>Comments: 44</div>
          </div>
        </div>

        <div className="statics-text-container">
          <div className="text-container-title">
            <h5>Comments</h5>
          </div>

          <div className="statics-covernsations-container">
            <div className="comments-chats-Own-container">
              <p>@Brandon Wanambisi</p>
              <p className="comments-chats-Others-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem consectetur magni veritatis, autem repudiandae
                consequatur doloremque deleniti laboriosam odio at d.
              </p>
            </div>
            {postItem?.comments?.map((item, index) => (
              <div key={index} className="comments-chats-Others-container">
                <p>@{item.split(':')[0]}</p>
                <p className="comments-chats-Others-text">
                  {item.split(':')[1]}
                </p>
              </div>
            ))}

            <div ref={commentsRef} style={{ marginTop: '110px' }} />
          </div>
          <div className="comments-form">
            <CommentForm
              setComment={setComment}
              handleCommentSubmit={handleCommentSubmit}
              comment={comment}
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
