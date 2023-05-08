import { Head } from "@inertiajs/react";
import NavBar from "@/Layouts/FOL/NavBar";
import Contenues from "@/Pages/FO/General/Contenues";
import SideBarInf from "@/Layouts/FOL/SideBarInf";
import SideBarCat from "@/Layouts/FOL/SideBarCat";
import SideBarTag from "@/Layouts/FOL/SideBarTag";
import Footer from "@/Layouts/FOL/Footer";
import Pagination from "@/Layouts/FOL/Pagination";

export default function getParCategorie({categorie,listcategorie,recent}){
    return(
        <>
            <Head>

                <title>{categorie.nomcategorie}</title>
                <meta name="descritpion" content="List Contenue-ia-information"></meta>


            </Head>
         

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

                                {/*  Pagination      */}
                                <Pagination contenue={categorie.contenues}/>
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
