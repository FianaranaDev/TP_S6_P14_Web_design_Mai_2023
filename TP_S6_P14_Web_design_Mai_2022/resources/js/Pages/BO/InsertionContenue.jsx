import {useState} from "react";
import axios from "axios";

export default function InsertionContenue({listcategorie}) {



        const [form, setForm] = useState({
            keywords: '',
            titre: '',
            idcategorie: listcategorie[0].id,
            resume: '',
            image: '',
            snippet: '',
            descriimage: '',
            datepublication: '',
        });

        function handleChange(e) {
            const key = e.target.name;
            const value = e.target.value;

            setForm(prevForm => ({
                ...prevForm,
                [key]: value,
            }));
        }

        function handleSubmit(e) {
            e.preventDefault();
            //encovoye
            axios.get('/contenue/add',{params: form})
                .then(response=>{
                    console.log(response.data);
                })
                .catch(error=>{
                    console.error(error);
                })
        }

        return (
            <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="idcategorie">Catégorie</label>
                    <select name="idcategorie" id="idcategorie" value={form.idcategorie} onChange={handleChange}>
                        {listcategorie.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.nomcategorie}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="keywords">Mots clés</label>
                    <input type="text" name="keywords" id="keywords" value={form.keywords} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="titre">Titre</label>
                    <input type="text" name="titre" id="titre" value={form.titre} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="resume">Résumé</label>
                    <textarea name="resume" id="resume" value={form.resume} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" id="image" value={form.image} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="snippet">Snippet</label>
                    <textarea name="snippet" id="snippet" value={form.snippet} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="descriimage">Description de l'image</label>
                    <textarea name="descriimage" id="descriimage" value={form.descriimage} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="datepublication">Date de publication</label>
                    <input type="date" name="datepublication" id="datepublication" value={form.datepublication} onChange={handleChange} />
                </div>
                <button type="submit">Créer</button>
            </form>
            </>


);
}
