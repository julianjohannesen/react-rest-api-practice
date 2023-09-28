import React from 'react';

export default function ImageShow({imgName, imgSrc, imgSizes, imgSrcSet, imgHeight, imgWidth}) {
    return (
        <figure>
            <img 
                alt={imgName}
                className="image" 
                decoding='async'
                height={imgHeight}
                loading="lazy"
                sizes={imgSizes}
                src={imgSrc} 
                srcSet={imgSrcSet}
                width={imgWidth}
                onClick={() => {
                    window.open(imgSrc, '_blank');
                }}

            />
            <figcaption>{imgName}</figcaption>
        </figure>
    )
}
