
export default function NavBar({categorie}) {
    return (
        <>
                            <head>
                    <meta charset="utf-8"></meta>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>



                    <link href="assets/img/favicon.png" rel="icon"></link>
                    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"></link>

                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&family=Inter:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>

                    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"></link>
                    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"></link>
                    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"></link>
                    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"></link>
                    <link href="assets/vendor/aos/aos.css" rel="stylesheet"></link>

                    <link href="assets/css/variables.css" rel="stylesheet"></link>
                    <link href="assets/css/main.css" rel="stylesheet"></link>
                    </head>

                <header id="header" class="header d-flex align-items-center fixed-top sticked">
                    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

                        <a href="index.html" class="logo d-flex align-items-center">

                        <h1>IA blog</h1>
                        </a>

                        <nav id="navbar" class="navbar">
                        <ul>
                            <li><a href="/">List Aleatoire</a></li>
                            <li class="dropdown"><a href="#"><span>Categories</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>

                            <ul>
                            {categorie.map((z) => (
                                <>

                                <li><a href={"/category?id="+z.id}>{z.nomcategorie}</a></li>


                                </>
                                ))}

                            </ul>
                            </li>

                        </ul>
                        </nav>

                        <div class="position-relative">

                            <p><input type="text" placeholder="Search" className="form-control"></input></p>
                            <input type="button" value="valider"></input>



                        </div>

                    </div>

                    </header>

        </>
    );
}






