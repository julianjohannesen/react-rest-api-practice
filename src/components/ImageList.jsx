import React, { useState, useEffect } from 'react';
import ImageShow from './ImageShow';
import { v4 as uuid } from 'uuid';

export default function ImageList(data) {
    
    const [reactKeys, setReactKeys] = useState([]);

    useEffect(
        // On initial render, generate some React keys that will be used every time the component re-renders. Otherwise, you get unnecessary re-renders.
        () => {
            const dataWithUUID = data.map(
                datum => ({ id: uuid(), value: datum })
            );
            setReactKeys(dataWithUUID);
        },
        // The empty array ensures that the effect is only run once, during the initial render
        []
    );

    return reactKeys.map(
        (image) => (
            <ImageShow 
                key={image.id} 
                imageProps={image.value}
            />
        )
    );
}
