/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const ImagePopup = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="popup bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button
            className="text-gray-700 hover:text-gray-900"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="text-center mt-4">
          <img src={imageUrl} alt="Popup Image" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
