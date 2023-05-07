import { Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Contenues from "./General/Contenues";
import SideBarInf from "@/Layouts/SideBarInf";
import SideBarCat from "@/Layouts/SideBarCat";
import SideBarTag from "@/Layouts/SideBarTag";

export default function getParCategorie({categorie,listcategorie,recent}){
    return(
        <>

            <Head title={categorie.nomcategorie}/>

            {/* navbar */}
            <NavBar categorie={listcategorie} />







            <main id="main">
                <section>
                    <div className="container">
                        <div className="row">


                            {/*  Contenue      */}
                            <div className="col-md-9">
                                <h1 class="category-title">{categorie.nomcategorie}</h1>

                            <Contenues contenue={categorie.contenues.data}/>




                            <div class="text-start py-4">
                                <div class="custom-pagination">
                                    <a href="#" class="prev">Prevous</a>
                                    <a href="#" class="active">1</a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#">4</a>
                                    <a href="#">5</a>
                                    <a href="#" class="next">Next</a>
                                </div>
                            </div>
                        </div>
                            {/* Fin Contenue      */}
                            {/*  Sidebar  */}
                            <div className="col-md-3">
                                <SideBarInf recent={recent}/>
                                <SideBarCat categorie={listcategorie}/>
                                <SideBarTag/>
                            </div>
                            {/*  Sidebar  */}

                        </div>


                    </div>
                </section>
            </main>

      
        </>
    );
}
