import React from 'react'

const ImageWithBackgroundLines = ({image, className, alt}) => {
    return (
        <div className={className ? 'imagewlines ' + className : 'imagewlines'}>
            <div className='imagewlines_gradient' data-position='left' >
            </div>
            <div className='imagewlines_lines'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='imagewlines_img'>
                <img src={image} alt={alt} />
            </div>
            <div className='imagewlines_gradient' data-position='right' >
            </div>
        </div>
    )
}

export default ImageWithBackgroundLines