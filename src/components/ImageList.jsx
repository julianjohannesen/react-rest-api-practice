import React, { useState, useEffect } from 'react';
import ImageShow from './ImageShow';
import { v4 as uuid } from 'uuid';

export default function ImageList({data}) {
    
    const [dataWithKeys, setDataWithKeys] = useState([]);

    useEffect(
        // On initial render, generate some React keys that will be used every time the component re-renders. Otherwise, you get unnecessary re-renders.
        () => {
            const dataWithUUID = data.map(
                datum => ({ ...datum, key: uuid() })
            );
            setDataWithKeys(dataWithUUID);
        },
        [data]
    );
        
    console.log("From ImageList at the end of useEffect here are data and dataWithKeys: ", data, dataWithKeys);

    return dataWithKeys.map(
        image => (
            <ImageShow key={image.key} {...image} />
        )
    );
}
