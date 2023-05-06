import { Head } from "@inertiajs/react";

export default function getContenue({contenue,categorie}){
    return(
        <>
      <head>
  <meta charset="utf-8"></meta>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>

  <title>ZenBlog Bootstrap Template - Index</title>
  <meta content="" name="description"></meta>
  <meta content="" name="keywords"></meta>

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

        <h1>ZenBlog</h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="index.html">Blog</a></li>
          <li><a href="single-post.html">Single Post</a></li>
          <li class="dropdown"><a href="category.html"><span>Categories</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="search-result.html">Search Result</a></li>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>

          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="position-relative">
        <a href="#" class="mx-2"><span class="bi-facebook"></span></a>
        <a href="#" class="mx-2"><span class="bi-twitter"></span></a>
        <a href="#" class="mx-2"><span class="bi-instagram"></span></a>

        <a href="#" class="mx-2 js-search-open"><span class="bi-search"></span></a>
        <i class="bi bi-list mobile-nav-toggle"></i>

        <div class="search-form-wrap js-search-form-wrap">
          <form action="search-result.html" class="search-form">
            <span class="icon bi-search"></span>
            <input type="text" placeholder="Search" class="form-control"></input>
            <button class="btn js-search-close"><span class="bi-x"></span></button>
          </form>
        </div>

      </div>

    </div>

  </header><header id="header" class="header d-flex align-items-center fixed-top sticked">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">

        <h1>ZenBlog</h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="index.html">Blog</a></li>
          <li><a href="single-post.html">Single Post</a></li>
          <li class="dropdown"><a href="category.html"><span>Categories</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="search-result.html">Search Result</a></li>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>

          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="position-relative">
        <a href="#" class="mx-2"><span class="bi-facebook"></span></a>
        <a href="#" class="mx-2"><span class="bi-twitter"></span></a>
        <a href="#" class="mx-2"><span class="bi-instagram"></span></a>

        <a href="#" class="mx-2 js-search-open"><span class="bi-search"></span></a>
        <i class="bi bi-list mobile-nav-toggle"></i>


        <div class="search-form-wrap js-search-form-wrap">
          <form action="search-result.html" class="search-form">
            <span class="icon bi-search"></span>
            <input type="text" placeholder="Search" class="form-control"></input>
            <button class="btn js-search-close"><span class="bi-x"></span></button>
          </form>
        </div>

      </div>

    </div>

  </header>




            {contenue.map((c) => (
                <>

          <h1>{c.titre}</h1>


          <strong>{c.snippet}</strong><br/>
              {c.datepublication}<br/>

                <a href={"/detail?id="+c.id}>{c.titre}</a>

              <br/><br/><br/>
            </>
            ))}

            {categorie.map((z) => (
                        <>
                                <a href={"/category/"+z.id}>{z.nomcategorie}</a>
                        </>
                    ))}

        </>
    );
}
