import React from "react";
import { motion } from "framer-motion";

const ImageShow = ({ image }) => {
  return (
    <div
      className="
        flex
        justify-center
        items-center
        border-2
        border-gray-300
        rounded-lg
        p-5
    "
    >
      <motion.img
        src={image.urls.small}
        alt={image.alt_description}
        className="
                rounded-lg
                max-w-full
                h-auto
                cursor-pointer
            "
        whileTap={{ scale: 0.9 }}
      />
    </div>
  );
};

export default ImageShow;
