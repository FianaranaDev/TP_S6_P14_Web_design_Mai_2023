import {useState} from "react";
import HeaderBO from "@/Layouts/BOL/HeaderBO";
import {Head} from "@inertiajs/react";

export default function ContenueUpdate({contenues,listcategorie,paragraphes}) {
    return (
        <>

        <Head>
            <title>Ajout Contenue </title>

        </Head>
            <HeaderBO/>
            <main id="main" className="main">

                <form method="post" action={"/admin/update/"+contenues.id+"-"+"contenue"}   enctype="multipart/form-data">
                    <section className="section">
                        <div className="row">

                            <div className="col-lg-12">




                                <div className="card">
                                    <div className="card-body">
                                        <h1 className="card-title">Ajout Contenue</h1>

                                        <div className="row g-3" >
                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail5" className="form-label">Titre</label>
                                                <input type="text" defaultValue={contenues.titre} name="titre" className="form-control" id="inputEmail5"></input>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputPassword5" className="form-label">Categorie</label>
                                                <select className="form-select"  name="idcategorie" aria-label="Default select example">

                                                    {listcategorie.map((z) => (
                                                        <>

                                                        if(contenues.idcategorie!==z.id){

                                                        <option defaultValue={z.id}>{z.nomcategorie}</option>

                                                        }else{
                                                            <option defaultValue={z.id} selected>{z.nomcategorie}</option>

                                                        }
                                            </>
                                                    ))}

                                                </select>




                                            </div>
                                            <div className="col-md-12">

                                                <label htmlFor="inputName5" className="form-label">Resume</label>
                                                <input type="text" defaultValue={contenues.resume} name="resume" className="form-control" id="inputName5"></input>
                                            </div>

                                            <div className="col-md-12">

                                                <label htmlFor="inputName5" className="form-label">Snippet</label>
                                                <input type="text" defaultValue={contenues.snippet} name="snippet" className="form-control" id="inputName5"></input>
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail5" className="form-label">Mots cles</label>
                                                <input type="text" defaultValue={contenues.keywords} name="keywords" className="form-control" id="inputEmail5"></input>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputPassword5" className="form-label">Date de
                                                    publication</label>
                                                <input type="date" defaultValue={contenues.datepublication} name="datepublication" className="form-control"></input>

                                            </div>


                                            <div className="col-md-6">
                                                <label htmlFor="inputPassword5" className="form-label">Image</label>
                                                <input className="form-control" type="file" name="image" id="formFile"></input></div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputCity" className="form-label">description
                                                    l'image</label>
                                                <input type="text" name="descriimage" defaultValue={contenues.descriimage} className="form-control" id="inputCity"></input>
                                            </div>


                                            <div className="text-center">


                                            </div>

                                        </div>

                                    </div>
                                </div>

                                {paragraphes.map((p) => (
                                    <>
                                        <div className="card">
                                            <div className="card-body">
                                                <a href={"/admin/supprimer/paragraphe/"+p.id+"-"+"paragraphe"} className="btn btn-danger"  >Supprimer Paragraphe</a>

                                                <div className="row g-3">
                                                    <div className="col-md-12">
                                                        <div className="form-floating">
                                                            <input type="text" defaultValue={p.titrepara} name="titrepara[]" className="form-control" id="floatingName"
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
                                                                   name="descritimage[]" defaultValue={p.descritimage} id="floatingPassword" ></input>
                                                            <label htmlFor="floatingPassword">descrit image</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-floating">
                                                    <textarea name="descriptione[]" defaultValue={p.descriptione} className="form-control" placeholder="Address"
                                                              id="floatingTextarea" ></textarea>
                                                            <label htmlFor="floatingTextarea">paragrapne</label>
                                                        </div>
                                                    </div>



                                                </div>

                                            </div>
                                        </div>

                                    </>



                                    ))}

                            </div>
                            <input type="submit" className="btn btn-success"   value="valider"></input>

                        </div>
                    </section>
                </form>
            </main>







        </>

    );
}
