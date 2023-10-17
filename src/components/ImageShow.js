import React from 'react'


const ImageShow = ({
    image
}) => {
  return (
    <div className='show-image'>
        <img src={image.urls.small} alt={image.alt_description} />
    </div>
  )
}

export default ImageShow
