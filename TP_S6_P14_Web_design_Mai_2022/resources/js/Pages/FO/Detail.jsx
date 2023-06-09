import { Head } from "@inertiajs/react";
import NavBar from "@/Layouts/FOL/NavBar";
import CDetail from "@/Pages/FO/General/CDetail";
export default function getDetail({detail,listcategorie}){
    return(
        <>



        {/* Navebar */}
        <NavBar categorie={listcategorie} />


            {/* detail */}

            <main id="main">
                <CDetail detail={detail}/>
            </main>
            {/* detail */}








<a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>

<script src="assets/js/main.js"></script>

        </>
    );
}
