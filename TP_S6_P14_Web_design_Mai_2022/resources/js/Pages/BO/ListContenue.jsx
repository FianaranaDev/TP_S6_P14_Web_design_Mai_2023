import HeaderBO from "@/Layouts/BOL/HeaderBO";
import React from "react";

export default function ListContenue({contenue}) {

    function paginationdecode(html){
        var txt=HTMLTextAreaElement = document.createElement("textarea");
        txt.innerHTML=html;
        if(txt.value=="« Previous")return "«";
        if(txt.value=="Next »")return "»";

        return txt.value;
    }




    return(
        <>
            <HeaderBO/>
            <body>
            <main id="main" className="main">
                <section className="section">
                    <div className="row">


                        { contenue.data.map((c) => (
                        <>
                            <div className="col-lg-4">
                            <div className="card">
                                <img src={"/assets/img/"+c.image} className="card-img-top" alt={c.descriimage}></img>
                                    <div className="card-img-overlay">
                                        <h1 className="card-title">{c.titre}</h1>
                                        <p className="card-text">{c.descriimage} </p>
                                    </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Categorie : quoi</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{c.snippet}</h6>
                                    <p className="card-text"> {c.resume}</p>
                                    <p className="card-text"><a href={"/admin/delete/contenue?id="+c.id} className="btn btn-primary">Supprimer</a>
                                        {/*<a href="#" className="btn btn-primary">Modifier</a>    */}</p>
                                </div>
                            </div>
                        </div>
                        </>
                        ))}

                        <center>
                        <div>

                            <div className="custom-pagination">
                                {contenue.links.map((link) => {
                                    if (link.url != null) {
                                        return <a href={link.url} className="active"><button type="button" className="btn btn-">{paginationdecode(link.label)}</button></a>
                                    }

                                })}


                            </div>


                        </div>
                        </center>
                    </div>
                </section>

            </main>

            </body>
            {/*<script src="/bo/assets/vendor/apexcharts/apexcharts.min.js"></script>*/}
            {/*<script src="/bo/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>*/}
            {/*<script src="/bo/assets/vendor/chart.js/chart.umd.js"></script>*/}
            {/*<script src="/bo/assets/vendor/echarts/echarts.min.js"></script>*/}
            {/*<script src="/bo/assets/vendor/quill/quill.min.js"></script>*/}
            {/*<script src="/bo/assets/vendor/simple-datatables/simple-datatables.js"></script>*/}
            {/*<script src="/bo/assets/vendor/tinymce/tinymce.min.js"></script>*/}
            {/*<script src="/bo/assets/vendor/php-email-form/validate.js"></script>*/}
            {/*<script src="/bo/assets/js/main.js"></script>*/}

        </>


    );




}

