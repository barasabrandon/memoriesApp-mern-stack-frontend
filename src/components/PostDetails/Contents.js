import React from 'react';

export default function Contents() {
  return (
    <>
      <div className="contents-image-container">
        <img
          src="https://i.ytimg.com/vi/Wl2OyaZVU3U/maxresdefault.jpg"
          alt="post-title"
        />
      </div>
      <div className="text-container">
        <div className="text-container-title">
          <h5>Title</h5>
        </div>
        <div className="text-container-tags">
          <small>#Mombasa #Eldoret #Nairobi</small>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            consectetur magni veritatis, autem repudiandae consequatur
            doloremque deleniti laboriosam odio at d.
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}
