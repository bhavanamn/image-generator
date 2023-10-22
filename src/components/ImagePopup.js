/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import { motion } from "framer-motion";

const ImagePopup = ({ imageUrl, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="popup bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            Download
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white transition duration-300 ease-in-out rounded p-2"
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
    </motion.div>
  );
};

export default ImagePopup;
