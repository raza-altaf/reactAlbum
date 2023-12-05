import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const AddAlbum = (props) => {
  // Function to retrieve data from the album form and pass it to the parent component
  const getDataAlbumForm = () => {
    // Get values from input fields
    const userId = document.getElementById("userid-inp").value;
    const title = document.getElementById("title-inp").value;

    // Call the parent component's function to add the album to the list
    props.addAlbumToList(Number(userId), title);
  };

  return (
    <>
      {/* Navbar component with path and page props */}
      <Navbar path="/" page="Home" />

      <div className="row ">
        <div className="col-md-4 shadow mx-auto p-5 add-album-container">
          {/* Album form */}
          <form className="text-center  ">
            <div className="mb-3">
              <h4>Enter New Album Details</h4>
              <div className="mb-3">
                {/* Input for UserId */}
                <label htmlFor="exampleInputPassword1" className="form-label">
                  {" "}
                  Enter UserId :
                </label>
                <input type="number" className="form-control" id="userid-inp" />
              </div>

              {/* Input for Album Title */}
              <label htmlFor="exampleInputEmail1" className="form-label">
                {" "}
                Enter Album Title :
              </label>
              <input
                type="text"
                className="form-control"
                id="title-inp"
                aria-describedby="emailHelp"
              />

              {/* Link to navigate back to the Home page */}
              <Link to="/">
                {/* Button to trigger the getDataAlbumForm function */}
                <button
                  onClick={getDataAlbumForm}
                  className="btn btn-primary mt-5"
                >
                  Add To List
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;
