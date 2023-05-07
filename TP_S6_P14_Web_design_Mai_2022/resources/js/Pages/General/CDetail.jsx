import {Head} from "@inertiajs/react";
import {useState} from "react";

export default function CDetail({detail}){


    const tay = (paragraphes) => {
        let retournena = "";
        let useDiv = true;

        for (let i = 0; i < paragraphes.length; i++) {
            if (useDiv) {
            retournena += '<div class="d-md-flex post-entry-2 half">\n' +
                '            <a href="#" class="me-4 thumbnail">\n' +
                '              <img src="assets/img/post-landscape-2.jpg" alt="" class="img-fluid">\n' +
                '            </a>\n' +
                '            <div class="ps-md-5 mt-4 mt-md-0">\n' +
                '              <div class="post-meta mt-4">About us</div>\n' +
                '              <h2 class="mb-4 display-4">Company History</h2>\n' +
                '\n' +
                '              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>\n' +
                '              <p>Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam. Tempora culpa iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi.</p>\n' +
                '            </div>\n' +
                '          </div>\n';
            } else {
                retournena += '<div class="d-md-flex post-entry-2 half mt-5">\n' +
                    '            <a href="#" class="me-4 thumbnail order-2">\n' +
                    '              <img src="assets/img/post-landscape-1.jpg" alt="" class="img-fluid">\n' +
                    '            </a>\n' +
                    '            <div class="pe-md-5 mt-4 mt-md-0">\n' +
                    '              <div class="post-meta mt-4">Mission &amp; Vision</div>\n' +
                    '              <h2 class="mb-4 display-4">Mission &amp; Vision</h2>\n' +
                    '\n' +
                    '              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>\n' +
                    '              <p>Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam. Tempora culpa iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi.</p>\n' +
                    '            </div>\n' +
                    '          </div>';
            }
            useDiv = !useDiv;


        }
        return (
            <div dangerouslySetInnerHTML={{ __html: retournena }} />
        );
    };

    return(
        <>
             <Head>
                 <title>{detail.titre}</title>
                 <meta name="description" content={detail.snippet}/>
                 <meta name="keywords" content={detail.keywords}/>
             </Head>


         {/*    <div class="single-post">*/}
         {/*        <div class="post-meta"><span class="date">{detail.snippet}</span> <span class="mx-1">&bullet;</span> <span> {detail.datepublication}</span></div>*/}
         {/*            <h1 class="mb-5">{detail.titre}</h1>*/}



         {/*<div>*/}
             <section>

             <div className="container" >


                 <div className="row">
                     <div className="col-lg-12 text-center mb-5">
                         <h1 className="page-title">About us</h1>
                     </div>
                 </div>


                 <div className="row mb-5">
                             {tay(detail.paragraphes.data)}


                 </div>

             </div>
             </section>
            </>


    )};
