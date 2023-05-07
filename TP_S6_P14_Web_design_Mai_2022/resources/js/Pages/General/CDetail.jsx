import {Head} from "@inertiajs/react";

export default function CDetail({detail}){
    return(
        <>
            <Head>
                    <title>{detail.titre}</title>
                    <meta name="description" content={detail.snippet}/>
                    <meta name="keywords" content={detail.keywords}/>
            </Head>

             <div class="single-post">
          <div class="post-meta"><span class="date">{detail.snippet}</span> <span class="mx-1">&bullet;</span> <span> {detail.datepublication}</span></div>
          <h1 class="mb-5">{detail.titre}</h1>



          {detail.paragraphes.data.map((p) => (
                <>
                    <figure class="my-4">
                        <img src="assets/img/post-landscape-1.jpg" alt={detail.descriimage} class="img-fluid"></img>
                        <h2>{p.titrepara}</h2>
                    </figure>
                    <p>{p.descriptione}</p>
                    </>
                    ))}
            </div>

        </>
    )};
