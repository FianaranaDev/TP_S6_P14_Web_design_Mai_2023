import { useState } from "react";
import axios from "axios";

export default function InsertionParagraphe({ contenues }) {
    const [form, setForm] = useState({

        idcontenue: contenues[0].id,
        titrepara: "",
        imagepara: "",
        descriptione: ""

    });

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setForm((prevForm) => ({
            ...prevForm,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .get('/paragraphe/add', { params: form })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            <h1>contenues</h1>
            <select
                name="idcategorie"
                value={form.idcontenue}
                onChange={handleChange}
            >
                {contenues.map((contenue) => (
                    <option key={contenue.id} value={contenue.id}>
                        {contenue.titre}
                    </option>
                ))}
            </select>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="titrepara">Titrepara</label>
                    <input
                        type="text"
                        name="titrepara"
                        id="titrepara"
                        value={form.titrepara}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="imagepara">Imagepara</label>
                    <input
                        type="text"
                        name="imagepara"
                        id="imagepara"
                        value={form.imagepara}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="descriptione">Descriptione</label>
                    <textarea
                        name="descriptione"
                        id="descriptione"
                        value={form.descriptione}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
