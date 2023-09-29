export default function ImageShow({imgName, imgSrc, imgHeight, imgWidth}) {
    return (
        <figure>
            <img 
                alt={imgName}
                className="image" 
                height={imgHeight}
                src={imgSrc} 
                width={imgWidth}

            />
            <figcaption>{imgName}</figcaption>
        </figure>
    )
}
