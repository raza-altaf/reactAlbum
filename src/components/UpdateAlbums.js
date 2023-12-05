import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

// Component to update album details
const UpdateAlbum = (props) => {
  // Function to get updated data and call the parent component's updateAlbumInList function
  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById("title-inp").value;
    let updateUserid = document.getElementById("userid-inp").value;

    // If the title input is empty, use the current title
    if (updateTitle === "") {
      updateTitle = props.album.title;
    }

    // If the userId input is empty, use the current userId
    if (updateUserid === "") {
      updateUserid = props.album.userId;
    }

    // Call the parent component's updateAlbumInList function with the updated data
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  };

  return (
    <>
      {/* Navbar component for navigation */}
      <Navbar path="/" page="Home" />

      {/* Container for the update album form */}
      <div className="row ">
        <div className="col-md-4 shadow mx-auto p-5 update-album">
          <form className="text-center">
            <div className="mb-3">
              {/* Display current title */}
              <h4>Title: {props.album.title}</h4>

              {/* Input field for new title */}
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter New Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="title-inp"
                aria-describedby="emailHelp"
              />

              {/* Display current userId */}
              <div className="mb-3">
                <h4>User Id: {props.album.userId}</h4>
                {/* Input field for new userId */}
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Enter New UserId:
                </label>
                <input type="number" className="form-control" id="userid-inp" />
              </div>

              {/* Checkbox (example, you may want to add a label and adjust functionality) */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="title-inp"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>

              {/* Link to navigate back to the Home page */}
              <Link to="/">
                {/* Button to submit the form and trigger getUpdateData function */}
                <button
                  type="submit"
                  onClick={getUpdateData}
                  className="btn btn-primary"
                >
                  Update
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateAlbum;
