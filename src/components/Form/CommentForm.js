import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../actions/postActions';

export default function CommentForm({ id, commentsRef }) {
  const dispatch = useDispatch();
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalComment = `${name}: ${comment}`;
    dispatch(commentPost(finalComment, id));
    setComment('');
    commentsRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Write a comment</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ color: 'black' }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}
