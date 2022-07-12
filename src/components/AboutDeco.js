import { Button } from '@mui/material';
import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShareIcon from '@mui/icons-material/Share';

export default function AboutDeco() {
  const [hasLiked, setHasLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(45);

  const handleLikeCount = () => {
    setHasLiked(!hasLiked);
    if (hasLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div className="about-deco-container">
      <div className="image-slider-container">
        <img
          src="https://i.ytimg.com/vi/Wl2OyaZVU3U/maxresdefault.jpg"
          className="memory-image"
          alt="Test image"
          loading="lazy"
        />
      </div>
      <div>
        <h5>What they say</h5>
        <p>
          A picture is worth a thousand words, but a memory is priceless <br />
          ~anonymous
        </p>
        <p>
          We don't remember days we remember moments <br /> ~Cesare Pavese
        </p>
      </div>
      <hr />
      <div className="card-about-decofooter-icons">
        <div>
          <Button variant="text">
            <span className="d-flex align-items-center">
              <span onClick={handleLikeCount} style={{ cursor: 'pointer' }}>
                {hasLiked ? (
                  <FavoriteIcon style={{ color: 'blue', opacity: 0.5 }} />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
              </span>
              <span className="ml-2">{likeCount}</span>
            </span>
          </Button>
        </div>
        <div>
          <Button variant="text">
            <span className="d-flex align-items-center">
              <span>
                <MessageOutlinedIcon />
              </span>
              <span className="ml-2 mb-2">10</span>
            </span>
          </Button>
        </div>
        <div>
          <Button variant="text">
            <span className="d-flex align-items-center">
              <span>
                <ShareIcon />
              </span>
              <span className="ml-2 mb-2">10</span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
