import React from "react";
import { Link } from "react-router-dom";

// Component to display individual albums in a list
const List = (props) => {
  return (
    // Unordered List using to show Album list
    <ul className="list-group list-group-horizontal-md">
      <li className="list-group-item">
        {/* Card component to display album information */}
        <div className="card text-bg-info mb-3" style={{ width: "18rem" }}>
          <div className="card-body">
            {/* Display the title of the album */}
            <p className="card-text">
              <h3>{props.album.title}</h3>
            </p>
          </div>

          {/* Card body for buttons (Update and Delete) */}
          <div className="card-body d-flex justify-content-between">
            {/* Link to navigate to the Update Album page with Update button */}
            <Link to="/update-album">
              <button
                id="myModal"
                className="btn btn-primary px-4"
                onClick={() => props.setUpdateAlbum(props.album)}
              >
                Update
              </button>
            </Link>

            {/* Button to delete the album */}
            <button
              className="btn btn-danger ml-0"
              onClick={() => props.deleteAlbumFromList(props.album.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default List;
