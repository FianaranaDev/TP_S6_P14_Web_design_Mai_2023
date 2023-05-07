import { Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Contenues from "./General/Contenues";
import SideBarInf from "@/Layouts/SideBarInf";
import SideBarCat from "@/Layouts/SideBarCat";
import SideBarTag from "@/Layouts/SideBarTag";
export default function getContenue({contenue,categorie,recent}){
    return(
        <>
            <Head title={"List Contenue"}/>
            {/* navbar */}
                <NavBar categorie={categorie} />
            {/* navbar */}


            <main id="main">
                <section>
                    <div className="container">
                        <div className="row">


                        {/*  Contenue      */}
                            <div className="col-md-9">
                                <h1 class="category-title">List </h1>

                                    <Contenues contenue={contenue}/>

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
                                        <SideBarCat categorie={categorie}/>
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
