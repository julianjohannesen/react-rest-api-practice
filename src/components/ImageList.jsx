import React, { useState, useEffect } from 'react';
import ImageShow from './ImageShow';
import { v4 as uuid } from 'uuid';

export default function ImageList({photos}) {
    
    const [dataWithKeys, setDataWithKeys] = useState([]);

    // Generate React keys once per API request. (Not using photo id from API response)
    useEffect(
        // On initial render, generate some React keys that will be used every time the component re-renders. Otherwise, you get unnecessary re-renders.
        () => {
            const dataWithUUID = photos.map(
                photo => ({ ...photo, key: uuid() })
            );
            setDataWithKeys(dataWithUUID);
        },
        [photos]
    );
        
    console.log("From ImageList at the end of useEffect here are data and dataWithKeys: ", photos, dataWithKeys);

    return dataWithKeys.map(
        image => (
            <ImageShow key={image.key} {...image} />
        )
    );
}
