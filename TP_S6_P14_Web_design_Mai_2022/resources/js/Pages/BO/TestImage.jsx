import React, { useState } from "react";
import axios from "axios";

export default function UploadImage() {
    const [image, setImage] = useState(null);

    function handleImageChange(event) {
        setImage(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image", image);

        axios
            .post("/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            <form method="get" action="/upload" encType="multipart/form-data">
                <div>
                    <label htmlFor="image">Sélectionnez une image :</label>
                    <input type="file" name="image" id="image" onChange={handleImageChange} />
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}
