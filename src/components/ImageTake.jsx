import React, { useContext, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import '../assets/style/Modal.css';
import { ImageContext } from '../context/ImageContext';

function ImageTake({ closeModal }) {
    const [image, setImage] = useState(null);  // Store the file, not the URL
    const [imageName, setImageName] = useState('');
    const [imageDesc, setImageDesc] = useState('');

    const ImageData = useContext(ImageContext)

    const handleImage = (e) => {
        const myImage = e.target.files[0];
        if (myImage) {
            setImage(myImage);  // Store the file itself
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ImageData.setImageData([...ImageData.imageData, {
            image,
            imgName: imageName,
            description: imageDesc
        }])
        // const imageDetail = {
        //     image,  // Pass the file itself
        //     name: imageName,
        //     description: imageDesc,
        // };
        // addImageData(imageDetail);
        closeModal();  // Close the modal after submitting
    };

    return (
        <div className='modal-main'>
            <div className="imageTake-header">
                <h1>Upload Image Here</h1>
                <IoMdClose size={29} onClick={closeModal} />
            </div>
            <div className='upload-image-section'>
                <div className='gallery-pictuer-taking'>
                    {image ? <img src={URL.createObjectURL(image)} alt="#" width={"100%"} height={"100%"} /> : ""}
                    <input type="file" accept="image/*" id="fileInput" onChange={handleImage} />
                    {!image && <button onClick={() => document.getElementById('fileInput').click()}>+ Upload Here</button>}
                </div>

                <div className='upload-image-detail'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter image Name' value={imageName} onChange={(e) => setImageName(e.target.value)} />
                        <textarea placeholder='Type Desc....' rows={4} value={imageDesc} onChange={(e) => setImageDesc(e.target.value)}></textarea>
                        <button type='submit'>Upload</button>
                        <button type='submit'>delete</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ImageTake;
