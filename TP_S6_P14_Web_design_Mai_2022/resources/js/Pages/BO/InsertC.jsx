import {useState} from "react";
import axios from "axios";
import HeaderBO from "@/Layouts/BOL/HeaderBO";

export default function InsertionC({listcategorie}) {

    return (
        <>


            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ajout Contenue</h5>

                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail5" className="form-label">Titre</label>
                            <input type="email" className="form-control" id="inputEmail5"></input>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword5" className="form-label">Categorie</label>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>


                        </div>
                        <div className="col-md-12">

                            <label htmlFor="inputName5" className="form-label">Resume</label>
                            <input type="text" className="form-control" id="inputName5"></input>
                        </div>

                        <div className="col-md-12">

                            <label htmlFor="inputName5" className="form-label">Snippet</label>
                            <input type="text" className="form-control" id="inputName5"></input>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputEmail5" className="form-label">Mots cles</label>
                            <input type="email" className="form-control" id="inputEmail5"></input>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword5" className="form-label">Date de
                                publication</label>
                            <input type="date" className="form-control"></input>

                        </div>


                        <div className="col-md-6">
                            <label htmlFor="inputPassword5" className="form-label">Image</label>
                            <input className="form-control" type="file" id="formFile"></input></div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">description
                                l'image</label>
                            <input type="text" className="form-control" id="inputCity"></input>
                        </div>


                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Ajout Paragraphe
                            </button>
                            <button type="reset" className="btn btn-secondary">Retirer Paragraphe
                            </button>
                        </div>
                    </form>

                </div>
            </div>





        </>

    );
}
