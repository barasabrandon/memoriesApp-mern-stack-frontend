import React from 'react';
import { useSelector } from 'react-redux';

import PostItemContainer from './PostItemContainer';
import loadingAnimation from '../assets/animations/loadingAnimation.gif';

import './Home.css';
import SearchForm from './Form/SearchForm';
import NotAvailableGif from './NotAvailableGif';

function Home() {
  const { postsItems, isLoading } = useSelector((state) => state.post);

  return (
    <>
      {isLoading ? (
        <div className="home-loading-animation">
          {loadingAnimation ? (
            <img
              src={loadingAnimation}
              style={{
                height: '100px',
                width: '100px',
                color: 'white',
              }}
            />
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      ) : (
        <div className="home-container">
          <div>
            <SearchForm />
          </div>
          {postsItems?.length === 0 ? (
            <NotAvailableGif />
          ) : (
            <div
              className="row justify-content-center mt-4 mb-4"
              id="home-post-item-container"
            >
              {postsItems?.map((item, i) => (
                <PostItemContainer key={i} {...item} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
