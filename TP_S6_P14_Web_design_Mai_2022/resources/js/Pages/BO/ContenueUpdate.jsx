import {useState} from "react";
import HeaderBO from "@/Layouts/BOL/HeaderBO";

export default function ContenueUpdate({contenues}) {
    const[paragraphes,setParagraphes]=useState(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Paragraphe</h2>

                <div className="row g-3">
                    <div className="col-md-12">
                        <div className="form-floating">
                            <input type="text" name="titrepara[]" className="form-control" id="floatingName"
                                   placeholder="Your Name"></input>
                            <label htmlFor="floatingName">titre</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">

                            <input type="file" name="imagepara[]" className="form-control" id="floatingEmail"
                                   placeholder="Your Email"></input>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control"
                                   name="descritimage[]" id="floatingPassword" ></input>
                            <label htmlFor="floatingPassword">descrit image</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                                                    <textarea name="descriptione[]" className="form-control" placeholder="Address"
                                                              id="floatingTextarea" ></textarea>
                            <label htmlFor="floatingTextarea">paragrapne</label>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
    const addPara=(event)=>{
        event.preventDefault();
        setParagraphes(<>
            {paragraphes}

            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Paragraphe</h2>

                    <div className="row g-3">
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input type="text" name="titrepara[]" className="form-control" id="floatingName"
                                       placeholder="Your Name"></input>
                                <label htmlFor="floatingName">titre</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">

                                <input type="file" name="imagepara[]" className="form-control" id="floatingEmail"
                                       placeholder="Your Email"></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control"
                                       name="descritimage[]"  id="floatingPassword" placeholder=""></input>
                                <label htmlFor="floatingPassword">descrit image</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                                    <textarea name="descriptione[]" className="form-control" placeholder="Address"
                                                              id="floatingTextarea" ></textarea>
                                <label htmlFor="floatingTextarea">paragrapne</label>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </>)
    };



    return (
        <>


            <HeaderBO/>
            <main id="main" className="main">

                <form method="post" action="insert"   enctype="multipart/form-data">
                    <section className="section">
                        <div className="row">

                            <div className="col-lg-12">




                                <div className="card">
                                    <div className="card-body">
                                        <h1 className="card-title">Ajout Contenue</h1>

                                        <div className="row g-3" >
                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail5" className="form-label">Titre</label>
                                                <input type="text" value={contenues.titre} name="titre" className="form-control" id="inputEmail5"></input>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputPassword5" className="form-label">Categorie</label>
                                                <select className="form-select" value={contenues.idcategorie} name="idcategorie" aria-label="Default select example">



                                                </select>




                                            </div>
                                            <div className="col-md-12">

                                                <label htmlFor="inputName5" className="form-label">Resume</label>
                                                <input type="text" value={contenues.resume} name="resume" className="form-control" id="inputName5"></input>
                                            </div>

                                            <div className="col-md-12">

                                                <label htmlFor="inputName5" className="form-label">Snippet</label>
                                                <input type="text" value={contenues.snippet} name="snippet" className="form-control" id="inputName5"></input>
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail5" className="form-label">Mots cles</label>
                                                <input type="text" value={contenues.keywords} name="keywords" className="form-control" id="inputEmail5"></input>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputPassword5" className="form-label">Date de
                                                    publication</label>
                                                <input type="date" value={contenues.datepublication} name="datepublication" className="form-control"></input>

                                            </div>


                                            <div className="col-md-6">
                                                <label htmlFor="inputPassword5" className="form-label">Image</label>
                                                <input className="form-control" type="file" name="image" id="formFile"></input></div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputCity" className="form-label">description
                                                    l'image</label>
                                                <input type="text" name="descriimage" value={contenues.descriimage} className="form-control" id="inputCity"></input>
                                            </div>


                                            <div className="text-center">


                                            </div>

                                        </div>

                                    </div>
                                    <button  className="btn btn-primary" onClick={addPara} >Ajout Paragraphe</button>
                                </div>
                                {paragraphes}
                            </div>
                            <input type="submit" className="btn btn-success"   value="valider"></input>

                        </div>
                    </section>
                </form>
            </main>







        </>

    );
}
