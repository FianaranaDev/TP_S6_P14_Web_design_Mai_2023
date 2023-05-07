import { Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Contenues from "./General/Contenues";
import SideBarInf from "@/Layouts/SideBarInf";
import SideBarCat from "@/Layouts/SideBarCat";
import SideBarTag from "@/Layouts/SideBarTag";
import Footer from "@/Layouts/Footer";

import Pagination from "@/Layouts/Pagination";

export default function getContenue({contenue,listcategorie,recent}){
    return(
        <>
            <Head title={"List Contenue"}/>
            {/* navbar */}
                <NavBar categorie={listcategorie} />
            {/* navbar */}


            <main id="main">
                <section>
                    <div className="container">
                        <div className="row">


                        {/*  Contenue      */}
                            <div className="col-md-9">
                                <h1 class="category-title">List </h1>
                                    <Contenues contenue={contenue.data}/>
                                {/*  Pagination      */}
                                    <Pagination contenue={contenue}/>
                                {/*  Pagination      */}
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

            <Footer categorie={listcategorie} recent={recent}/>
    </>
    );
}
