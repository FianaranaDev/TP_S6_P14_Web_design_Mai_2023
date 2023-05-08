import { Head } from "@inertiajs/react";
import NavBar from "@/Layouts/FOL/NavBar";
import Contenues from "@/Pages/FO/General/Contenues";
import SideBarInf from "@/Layouts/FOL/SideBarInf";
import SideBarCat from "@/Layouts/FOL/SideBarCat";
import SideBarTag from "@/Layouts/FOL/SideBarTag";
import Footer from "@/Layouts/FOL/Footer";

import Pagination from "@/Layouts/FOL/Pagination";

export default function getContenue({contenue,listcategorie,recent}){
    return(
        <>
            <Head>
                <title>List Contenue</title>
                <meta name="descritpion" content="List Contenue-ia-information"/>

            </Head>



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
