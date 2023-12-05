import React from "react";
import List from "./List";
import Navbar from "./Navbar";

// Component to display a list of albums
const AlbumsList = (props) => {
  return (
    <>
      {/* Navbar component with page and path props */}
      <Navbar page="Add Albums" path="/add-album" />

      {/* Container for the list of albums */}
      <div className="albums-list">
        {/* Map over the albums array and render List component for each album */}
        {props.albums.map((album) => (
          <List
            album={album}
            key={album.id}
            setUpdateAlbum={props.setUpdateAlbum}
            deleteAlbumFromList={props.deleteAlbumFromList}
          />
        ))}
      </div>
    </>
  );
};

export default AlbumsList;
