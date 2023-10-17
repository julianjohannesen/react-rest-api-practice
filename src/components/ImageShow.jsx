export default function ImageShow({height, width, color, likes, description, urls}) {
    return (
        <figure className="" > {/* figure must have width for img aspect ratio to work */}
            <img 
                alt={description}
                className="" /* is-3by2 is the thumbnail aspect ratio */ 
                height="133px"
                src={urls.small}
                width="200px"

            />
            <figcaption>{description ? description : "No description available"}</figcaption>
        </figure>
    )
}
