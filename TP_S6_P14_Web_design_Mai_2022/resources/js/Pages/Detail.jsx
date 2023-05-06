import { Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import CDetail from "./CDetail";
export default function getDetail({detail,categorie}){
    return(
        <>
        {/* Navebar */}
        <NavBar categorie={categorie} />

    <main id="main">
        <section class="single-post-content">
        <div class="container">
            {/* detail */}
            <div class="row">
                <CDetail detail={detail}/>
            </div>
            {/* detail */}
    </div>


    
</section>
</main>

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
