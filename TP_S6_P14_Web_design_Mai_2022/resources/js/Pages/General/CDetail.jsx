import {Head} from "@inertiajs/react";
import {useState} from "react";

export default function CDetail({detail}){


    const tay = (paragraphes) => {
        let elementsJSX = [];
        let useDiv = true;

        for (let i = 0; i < paragraphes.length; i++) {
            if (useDiv) {
                elementsJSX.push(
                    <div className="d-md-flex post-entry-2 half">
                        <a href="#" className="me-4 thumbnail">
                            <img src="assets/img/post-landscape-2.jpg" alt="" className="img-fluid" />
                        </a>
                        <div className="ps-md-5 mt-4 mt-md-0">
                            <div className="post-meta mt-4"></div>
                            <h2 className="mb-4 display-4">{paragraphes[i].titrepara}</h2>
                            <p>{paragraphes[i].descriptione}</p>
                        </div>
                    </div>
                );
            } else {
                elementsJSX.push( <div class="d-md-flex post-entry-2 half mt-5">
                                <a href="#" class="me-4 thumbnail order-2">
                                  <img src="assets/img/post-landscape-1.jpg" alt="" class="img-fluid"/>
                                </a>
                                <div class="pe-md-5 mt-4 mt-md-0">
                                  <div class="post-meta mt-4"></div>
                                  <h2 class="mb-4 display-4">{paragraphes[i].descriptione}</h2>
                                  <p>{paragraphes[i].descriptione}</p>
                                </div>
                              </div> );
            }
            useDiv = !useDiv;


        }
        return <>{elementsJSX}</>;

    };

    return(
        <>
             <Head>
                 <title>{detail.titre}</title>
                 <meta name="description" content={detail.snippet}/>
                 <meta name="keywords" content={detail.keywords}/>
             </Head>

             <section>

             <div className="container" >


                 <div className="row">
                     <div className="col-lg-12 text-center mb-5">
                         <h1 className="page-title">{detail.titre}</h1>
                     </div>
                 </div>


                 <div className="row mb-5">
                             {tay(detail.paragraphes.data)}


                 </div>

             </div>
             </section>
            </>


    )};
