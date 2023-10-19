import React from "react";

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
        cursor-pointer
    "
    >
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="
                rounded-lg
                max-w-full
                h-auto
            "
      />
    </div>
  );
};

export default ImageShow;
