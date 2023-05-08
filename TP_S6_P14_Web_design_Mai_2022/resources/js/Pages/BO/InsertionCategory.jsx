import HeaderBO from "@/Layouts/BOL/HeaderBO";

export default function InsertionCategory() {


    return(
        <>
        <HeaderBO/>

            <main id="main" className="main">


                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">



                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Ajout Categorie</h5>

                                    <form className="row g-3" action="/admin/categorie/add" method="GET">

                                        <div className="col-md-12">

                                            <label htmlFor="inputName5" className="form-label">Categorie</label>
                                            <input type="text" className="form-control" name="nomcategorie" id="inputName5"></input>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Ajout Categorie</button>
                                        </div>
                                    </form>

                                </div>
                            </div>


                        </div>


                    </div>
                </section>

            </main>



        </>


    );




}

