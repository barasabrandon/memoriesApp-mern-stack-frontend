import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import Input from './Input';
import { addPostItem } from '../../features/posts/postSlice';
import CreateMemoryModal from '../CreateMemoryModal';

function CreateMemoryForm() {
  const id = uuidv1();
  const date = new Date().toISOString();
  const [memoryData, setMemoryData] = useState({
    id: id,
    title: '',
    message: '',
    tags: '',
    imageFile: '',
    creator: 'memoriestest@gmail.com',
  });
  const dispatch = useDispatch();

  const clear = () => {
    setMemoryData({
      id: id,
      title: '',
      message: '',
      tags: '',
      imageFile: '',
      creator: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPostItem(memoryData));
    clear();
  };

  const handleFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setMemoryData({ ...memoryData, [name]: value });
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#2779e2' }}>
      <form onSubmit={handleSubmit}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <h3 className="text-white mb-4">Create Memory</h3>

              <div className="card" style={{ borderRadius: '15px' }}>
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
                        placeholder="They are comma separated"
                        name="tags"
                        value={memoryData.tags}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Your message</h6>
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
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default CreateMemoryForm;
