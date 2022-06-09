import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import "./PostDetails.css";

function PostDetails() {
  return (
    <>
      <div class="card m-4">
        <div className="card-body">
          <div className="container">
            <div className="container-image">
              <img
                src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div>
              <h3>Tags1, #Tags2, #Tag3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                exercitationem atque, voluptatum, magnam quisquam veniam sint
                libero magni blanditiis eum aliquam, provident fugit maiores
                expedita consequuntur. Inventore rerum sunt doloribus?
              </p>
            </div>
          </div>
          <div className="container-comments">
            <div>
              <h3>Comments</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                exercitationem atque, ibus?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                exercitationem atque, voluptatum, magnam quisquam veniam sint
                libero magni blanditiis?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                exercitationem atque, oribus?
              </p>
            </div>
            <div>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Write a comment
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
          <hr />

          <h6>Related Posts</h6>
          <div className="row justify-content-center mt-3 mb-">
            <div className="col-lg-3 col-md-3 col-sm-10 m-sm-3 m-1 ">
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
                  class="image-responsive"
                  alt="e"
                  style={{ height: "170px", margin: "10px" }}
                />

                <div
                  class="card-body"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    opacity: 0.5,
                    fontStyle: "italic",
                  }}
                >
                  <h5
                    class="card-title"
                    style={{
                      backgroundColor: "blue",
                      color: "yellow",
                    }}
                  >
                    #Tag1, #Tag2, #Tag3
                  </h5>
                  <p
                    class="card-text"
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    This is a wider card with supporting text below as a natural
                    lead-in thh dhhdhh dhdhhd
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted d-flex justify-content-between align-items-center">
                    <span class="d-flex align-items-center">
                      <span>
                        <FavoriteBorderOutlinedIcon />
                      </span>
                      <span class="ml-2"> You, and 9 others</span>
                    </span>
                    <span>3 mins ago</span>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-10 m-sm-3 m-1 ">
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
                  class="image-responsive"
                  alt="e"
                  style={{ height: "170px", margin: "10px" }}
                />

                <div
                  class="card-body"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    opacity: 0.5,
                    fontStyle: "italic",
                  }}
                >
                  <h5
                    class="card-title"
                    style={{
                      backgroundColor: "blue",
                      color: "yellow",
                    }}
                  >
                    #Tag1, #Tag2, #Tag3
                  </h5>
                  <p
                    class="card-text"
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    This is a wider card with supporting text below as a natural
                    lead-in thh dhhdhh dhdhhd
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted d-flex justify-content-between align-items-center">
                    <span class="d-flex align-items-center">
                      <span>
                        <FavoriteBorderOutlinedIcon />
                      </span>
                      <span class="ml-2"> You, and 9 others</span>
                    </span>
                    <span>3 mins ago</span>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-10 m-sm-3 m-1 ">
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
                  class="image-responsive"
                  alt="e"
                  style={{ height: "170px", margin: "10px" }}
                />

                <div
                  class="card-body"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    opacity: 0.5,
                    fontStyle: "italic",
                  }}
                >
                  <h5
                    class="card-title"
                    style={{
                      backgroundColor: "blue",
                      color: "yellow",
                    }}
                  >
                    #Tag1, #Tag2, #Tag3
                  </h5>
                  <p
                    class="card-text"
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    This is a wider card with supporting text below as a natural
                    lead-in thh dhhdhh dhdhhd
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted d-flex justify-content-between align-items-center">
                    <span class="d-flex align-items-center">
                      <span>
                        <FavoriteBorderOutlinedIcon />
                      </span>
                      <span class="ml-2"> You, and 9 others</span>
                    </span>
                    <span>3 mins ago</span>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-10 m-sm-3 m-1 ">
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
                  class="image-responsive"
                  alt="e"
                  style={{ height: "170px", margin: "10px" }}
                />

                <div
                  class="card-body"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    opacity: 0.5,
                    fontStyle: "italic",
                  }}
                >
                  <h5
                    class="card-title"
                    style={{
                      backgroundColor: "blue",
                      color: "yellow",
                    }}
                  >
                    #Tag1, #Tag2, #Tag3
                  </h5>
                  <p
                    class="card-text"
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    This is a wider card with supporting text below as a natural
                    lead-in thh dhhdhh dhdhhd
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted d-flex justify-content-between align-items-center">
                    <span class="d-flex align-items-center">
                      <span>
                        <FavoriteBorderOutlinedIcon />
                      </span>
                      <span class="ml-2"> You, and 9 others</span>
                    </span>
                    <span>3 mins ago</span>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetails;
