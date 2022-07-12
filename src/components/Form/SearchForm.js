import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPostsItemSBySearch } from '../../actions/postActions';

export default function SearchForm() {
  const { isLoading } = useSelector((state) => state.post);
  const [searchTerm, setSearchTerm] = useState('');
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() || tags) {
      dispatch(getPostsItemSBySearch(searchTerm));
    } else {
      console.log('Enter keywords to search');
    }
  };

  return (
    <div className="search-form-container">
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Search Memories</label>
          <input
            type="text"
            className="form-control"
            placeholder="By title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          disabled={!searchTerm}
          onClick={handleSubmit}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
