import { useState, useEffect } from 'react';
import ImageShow from './ImageShow';
import { v4 as uuid } from 'uuid';

export default function ImageList({photos}) {
    
    const [dataWithKeys, setDataWithKeys] = useState(undefined);

    // Generate React keys once per API request. (Not using the id from the API response)
    useEffect(
        // On initial render, just once, generate React keys that will be used every time the component re-renders. Otherwise, you get unnecessary re-renders.
        () => {
            const dataWithUUID = photos.length > 0 && photos.map(
                photo => ({ ...photo, key: uuid() })
            );
            setDataWithKeys(dataWithUUID);
        },
        [photos]
    );
        
    console.log("From ImageList, after useEffect here are data and dataWithKeys: ", photos, dataWithKeys);

    return dataWithKeys 
        ? 
        dataWithKeys.map(
            image => <ImageShow key={image.key} {...image} />)
        : 
        <p>No images found</p>
}
