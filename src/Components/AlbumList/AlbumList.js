import React, { useState } from "react";
import styles from "./albumlist.module.css";
import AlbumForm from "../AlbumForm/AlbumForm";
import Album from "../Album/Album";

function AlbumList() {
  // variables to store data
  // to store name of albums
  const [albumList, setAlbumList] = useState([]);

  // to show albumform or not by- default it's false
  const [showAlbumForm, setShowAlbumForm] = useState(false);

  // to open any album with some AlbumID (default - false)
  const [openAlbum, setOpenAlbum] = useState({ albumId: "", open: false });

  return (
    <>
      {/* main container */}
      <div className={styles.mainContainer}>
        {/* wheather to opne album list or not */}
        {!openAlbum.open ? (
          // if there is no album to open then render this
          <>
            {/* conditional rendering album form to add new album */}
            <div className={styles.albumForm}>
              {showAlbumForm && <AlbumForm />}
            </div>

            <div className={styles.header}>
              <span>Your Albums</span>
              {/* button to show and hide album form */}
              <button
                className={styles.btn}
                onClick={() => setShowAlbumForm(!showAlbumForm)}
              >
                {!showAlbumForm ? "Add album" : "cancel"}
              </button>
            </div>

            <div className={styles.albumContainer}>
              {/* looping over all the albums in the array and showing them one by one */}
              {albumList.map((card, i) => (
                <Album key={i} info={card} setOpenAlbum={setOpenAlbum} />
              ))}
            </div>
          </>
        ) : (
          // if open album is true then render all the content within the album
          <ImageList openAlbum={openAlbum} setOpenAlbum={setAlbumList} />
        )}
      </div>
    </>
  );
}

export default AlbumList;
