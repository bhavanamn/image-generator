import React from 'react'
import ImageShow from './ImageShow'

const ImageList = ({
    images
}) => {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })
  return (
    <div className='
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-4 
        mt-10 
        mb-10
        w-4/5
        h-auto
    '>
      {renderedImages}
    </div>
  )
}

export default ImageList
