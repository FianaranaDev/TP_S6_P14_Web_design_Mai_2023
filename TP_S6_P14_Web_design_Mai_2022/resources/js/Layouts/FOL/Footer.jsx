import FooterContenues from "@/Layouts/FOL/FooterContenues";

export default function Footer({categorie,recent}) {
    return (
        <>
<footer id="footer" class="footer">

    <div class="footer-content">
        <div class="container">

            <div class="row g-1">

                <div class="col-6 col-lg-2">
                    <h3 class="footer-heading">Navigation</h3>
                    <ul class="footer-links list-unstyled">

                        <li><a href="/"><i class="bi bi-chevron-right"></i> List Aleatoire</a></li>

                    </ul>
                </div>
                <div class="col-6 col-lg-2">
                    <h3 class="footer-heading">Categories</h3>
                    <ul class="footer-links list-unstyled">

                        {categorie.map((z) => (
                            <>
                                <li><a href={"/category/"+z.id+"-"+"categorie"}  ><i className="bi bi-chevron-right"></i> {z.nomcategorie}</a></li>
                            </>
                        ))}


                    </ul>
                </div>

                <FooterContenues recent={recent}/>
            </div>
        </div>
    </div>



</footer>

<a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="/assets/vendor/aos/aos.js"></script>
<script src="/assets/vendor/php-email-form/validate.js"></script>

<script src="/assets/js/main.js"></script>
        </>
);
}
