import { Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Contenues from "./General/Contenues";
export default function getContenue({contenue,categorie}){
    return(
        <>

            <Head title={"List Contenue"}/>

        {/* navbar */}
            <NavBar categorie={categorie} />

    <main id="main">
        <section>
            <div class="container">
                <div class="row">
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
            </div>
        </section>
    </main>
    </>
    );
}
