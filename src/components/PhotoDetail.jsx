import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './PhotoDetails.css';

function PhotoDetail() {
  const { id } = useParams();
  const [photoDetail, setPhotoDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the details of the selected photo using its ID from the API.
    // Update 'API_URL' with your actual API endpoint.
    fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotoDetail(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching photo details:", error));
  }, [id]);

  return (
    <div>
      <h2>Photo Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        photoDetail && (
          <div>
            <img src={photoDetail.url} alt={photoDetail.title} />
            <p>Title: {photoDetail.title}</p>
            <p>Description: {photoDetail.description}</p>
          </div>
        )
      )}
    </div>
  );
}

export default PhotoDetail;
