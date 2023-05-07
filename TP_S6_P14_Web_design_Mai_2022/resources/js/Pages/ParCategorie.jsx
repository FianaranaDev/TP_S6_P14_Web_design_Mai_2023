import { Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Contenues from "./General/Contenues";
import NavBarTemp from "@/Layouts/NavBarTemp";
export default function getParCategorie({categorie,cat}){
    return(
        <>

            <Head title={categorie.nomcategorie}/>

            {/* navbar */}
            <NavBar categorie={cat} />

            <main id="main">
                <section>
                    <div class="container">
                        <div class="row">
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
                    </div>
                </section>
            </main>

            <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>

            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="assets/vendor/aos/aos.js"></script>
            <script src="assets/vendor/php-email-form/validate.js"></script>

            <script src="assets/js/main.js"></script>
        </>
    );
}
