
export default function CDetail({detail}){
    return(
        <>
             <div class="single-post">
          <div class="post-meta"><span class="date">{detail.snippet}</span> <span class="mx-1">&bullet;</span> <span> {detail.datepublication}</span></div>
          <h1 class="mb-5">{detail.titre}</h1>



          {detail.paragraphes.data.map((p) => (
                <>
                    <figure class="my-4">
                        <img src="assets/img/post-landscape-1.jpg" alt="" class="img-fluid"></img>
                        <figcaption>{p.titrepara}</figcaption>
                    </figure>
                    <p>{p.descriptione}</p>
                    </>
                    ))}
            </div>

        </>
    )};
