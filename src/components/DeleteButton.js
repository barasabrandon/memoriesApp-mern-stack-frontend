import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deletePostItem } from '../actions/postActions';

export default function DeleteButton({ id }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deletePostItem(id));
  };
  return (
    <div>
      <span>
        <Button variant="text" onClick={handleClick}>
          <DeleteOutlineTwoToneIcon className="delete-icon" />
        </Button>
      </span>
    </div>
  );
}
