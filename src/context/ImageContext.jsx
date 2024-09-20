import React, { createContext, useState } from 'react'

export const ImageContext = createContext()
export const ImageContextNext = createContext()

export const ImageProvider = ({ children }) => {

    const [imageData, setImageData] = useState([]);
    const [imageDataNext, setImageDataNext] = useState([]);
    console.log("image Data is ", imageData)

    return (
        <>
            <ImageContext.Provider value={{ imageData, setImageData }}>
                {children}
            </ImageContext.Provider>
        </>
    )
}
