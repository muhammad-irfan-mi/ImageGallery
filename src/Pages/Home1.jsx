import React, { useContext } from 'react'
import { ImageContext } from '../context/ImageContext'
import '../assets/style/Home.css'

function Home1() {

    const image = useContext(ImageContext)

    return (
        <div>
            <div style={{ width: "80%", display: "flex", justifyContent: "space-around", flexWrap: "wrap", margin: "0px auto" }}>
                {image.imageData.map((images, index) => {
                    return <div key={index} style={{ width: "30%", marginTop:"20px"}}>
                        <img
                            src={URL.createObjectURL(images.image)}
                            // src={images.image}
                            alt="Uploaded Image"
                            width={"100%"}
                            height={"170px"}
                        />
                        <h2>{images.imgName}</h2>
                        <h6>{images.description}</h6>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home1
