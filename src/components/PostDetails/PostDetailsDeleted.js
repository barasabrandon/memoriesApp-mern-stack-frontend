import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../actions/postActions';
import PostItemContainer from '../PostItemContainer';
import Contents from './Contents';

import './PostDetailsDeleted.css';
import Statics from './Statics';

export default function PostDetailsDeleted() {
  const { id } = useParams();
  const { postItem, postsItems } = useSelector((state) => state.post);

  const filteredPostItems = postsItems?.filter((item) =>
    item.title.toLowerCase().includes(postItem?.title?.toLowerCase())
  );

  const finalFilteredItems = filteredPostItems.filter(
    (item) => item._id !== postItem._id
  );

  return (
    <>
      <div className="postDetails-container">
        {/* CONTENTS-CONTAINER */}

        <div className="contents-container">
          <Contents />
        </div>

        {/* STATICS-CONTAINER */}
        <div>
          <Statics id={id} />
        </div>
      </div>
      {/* RELATED-CONTAINER */}
      <div className="related-posts-container">
        <div className="related-topics">
          <div>Related Memories </div>
          <div className="related-topics-count">
            {finalFilteredItems?.length}
          </div>
        </div>
        <div className="row justify-content-center mt-3 mb-">
          {finalFilteredItems?.map((item, i) => (
            <PostItemContainer key={i} {...item} relatedPost />
          ))}
        </div>
      </div>
    </>
  );
}
