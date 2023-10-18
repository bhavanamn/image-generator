import React from 'react';
import ImageShow from './ImageShow';

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-5'>
      {renderedImages}
      <style jsx>{`
        .grid img {
          width: 100%; 
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default ImageList;
