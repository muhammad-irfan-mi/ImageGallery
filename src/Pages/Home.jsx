import React, { useContext } from 'react'
import '../assets/style/Home.css'
import img1 from '../assets/media/product1.jpg'
import img2 from '../assets/media/product2.webp'
import img3 from '../assets/media/product3.jpg'
import Home1 from './Home1'


const item = [
    {
        imageUrl: img1,
        name: "Product 1",
        desc: "This is Product 1"
    },
    {
        imageUrl: img2,
        name: "Product 2",
        desc: "This is Product 2"
    },
    {
        imageUrl: img3,
        name: "Product 3",
        desc: "This is Product 3"
    }
]
function Home() {
    return (
        <>
            <div className="home-main-top">
                <div className="home-main-top-content">
                    <h1><span>FANU</span>&nbsp; PHOTON</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio praesentium, asperiores perspiciatis illum molestiae pariatur voluptas rerum aut eligendi totam beatae.</p>
                </div>
            </div>
            <div>
                <Home1 />
            </div>
        </>
    )
}

export default Home;
