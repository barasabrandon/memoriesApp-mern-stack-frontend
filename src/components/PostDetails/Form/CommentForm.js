import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../../actions/postActions';
import PublishIcon from '@mui/icons-material/Publish';

import './CommentForm.css';

export default function CommentForm({
  id,
  handleCommentSubmit,
  setComment,
  comment,
}) {
  const stylesButton = {
    border: 'none',
    outline: 'none',
  };

  return (
    <>
      <form onSubmit={handleCommentSubmit}>
        <div className="form-field-container">
          <div className="comment-form-input-field">
            <TextField
              id="standard-basic"
              label="Write comment..."
              variant="standard"
              fullWidth
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="text"
              fullWidth
              disabled={!comment}
              style={stylesButton}
              onClick={handleCommentSubmit}
            >
              <PublishIcon />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
