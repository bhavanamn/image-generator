/* eslint-disable jsx-a11y/img-redundant-alt */
// ImagePopup.js
import React from "react";

const ImagePopup = ({ imageUrl, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <img src={imageUrl} alt="Popup Image" />
        <button className="popup-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ImagePopup;
