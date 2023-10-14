import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './PhotoGallery.css'


function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    // Fetch the photos from your API and set them in the state.
    // Replace 'API_URL' with your actual API endpoint.
    fetch("https://api.slingacademy.com/v1/sample-data/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="photo-gallery">
      <h1>Photo Gallery</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id} onClick={() => handlePhotoClick(photo)}>
            <img src={photo.url} alt={photo.title} />
          </li>
        ))}
      </ul>
      {selectedPhoto && (
        <Link to={`/photos/${selectedPhoto.id}`}>
          <button>View Details</button>
        </Link>
      )}
    </div>
  );
}

export default PhotoGallery;
