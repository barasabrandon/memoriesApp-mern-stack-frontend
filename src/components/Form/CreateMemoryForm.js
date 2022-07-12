import React, { useEffect, useState } from 'react';
// import { v1 as uuidv1 } from 'uuid';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import Input from './Input';
import CreateMemoryModal from '../CreateMemoryModal';
import { editPostItemAction, newPostItem } from '../../actions/postActions';
import {
  isLoadingState,
  setNotEditingPost,
  isNotLoadingState,
} from '../../features/posts/postSlice';
import LoginForm from './LoginForm';

function CreateMemoryForm() {
  const { isEditing, isLoading, postsItems, currentPostItemId } = useSelector(
    (state) => state.post
  );
  const navigate = useNavigate();
  const userInLocalStorage = JSON.parse(localStorage.getItem('userProfile'));
  const userEmail = userInLocalStorage?.result?.email;
  const userToken = userInLocalStorage?.token;

  const [memoryData, setMemoryData] = useState({
    title: '',
    message: '',
    tags: '',
    imageFile: '',
    likes: 0,
    creator: userEmail,
  });

  const dispatch = useDispatch();

  const post = postsItems.find((item) => item._id === currentPostItemId);

  useEffect(() => {
    if (post) {
      setMemoryData(post);
    }
  }, [post]);

  const clear = () => {
    setMemoryData({ title: '', message: '', tags: '', imageFile: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentPostItemId === '') {
      dispatch(newPostItem(memoryData));
      navigate('/');
    } else {
      dispatch(isLoadingState());
      dispatch(editPostItemAction(memoryData, currentPostItemId));
      dispatch(setNotEditingPost());
      navigate('/');
    }
    clear();
  };

  const handleFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setMemoryData({ ...memoryData, [name]: value });
  };

  if (!userToken) return <LoginForm />;

  return (
    <>
      <section className="vh-100" style={{ marginTop: '20px' }}>
        <form onSubmit={handleSubmit}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="card" style={{ borderRadius: '15px' }}>
                <h3 className="text-black mb-4">
                  {isEditing ? 'Edit' : 'Add'} Memory
                </h3>
                <div className="card-body">
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Title</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <Input
                        placeholder="Title of the memory"
                        name="title"
                        value={memoryData.title}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <CreateMemoryModal />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Tags</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <Input
                        placeholder="comma separated"
                        name="tags"
                        value={memoryData.tags}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Message about memory</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <textarea
                        name="message"
                        value={memoryData.message}
                        onChange={handleFormChange}
                        className="form-control"
                        rows="4"
                        placeholder="Description about this memory"
                      ></textarea>
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Upload Image</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => {
                          setMemoryData({ ...memoryData, imageFile: base64 });
                        }}
                      />

                      <div className="small text-muted mt-2">
                        Max file size 5 MB
                      </div>
                    </div>
                  </div>
                  <hr className="mx-n3" />

                  <div className="px-5 py-4">
                    <button
                      type="submit"
                      className={
                        isLoading
                          ? 'btn btn-success btn-lg'
                          : 'btn btn-primary btn-lg'
                      }
                    >
                      {isEditing ? 'Update' : 'Submit'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default CreateMemoryForm;
