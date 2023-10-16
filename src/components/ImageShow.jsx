export default function ImageShow({height, width, color, likes, description, urls}) {
    return (
        <figure className="" style={{width:"200px"}}> {/* figure must have width for img aspect ratio to work */}
            <img 
                alt={description}
                className="image is-3by2" /* 3by2 is the thumbnail aspect ratio */ 
                src={urls.thumb}

            />
            <figcaption>{description ? description : "No description available"}</figcaption>
        </figure>
    )
}
