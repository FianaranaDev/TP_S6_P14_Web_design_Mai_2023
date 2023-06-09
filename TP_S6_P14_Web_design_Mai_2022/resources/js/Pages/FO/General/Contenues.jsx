
export default function Contenues({contenue}){
    return(
        <>
            {contenue.map((c) => (

                <div class="d-md-flex post-entry-2 half">
                    <a href="#" class="me-4 thumbnail">

                        <img src={"/assets/img/"+c.image} width="400"  height="200" alt="" class="img-fluid"></img>
                    </a>

                    <div>


                        <div class="post-meta"><span class="date">{c.snippet}</span> <span class="mx-1">;</span> <span>{c.datepublication}</span></div>
                        <h2><a href={"/detail/"+c.id+"-"+"contenue"}>{c.titre}</a></h2>
                        <p>{c.resume}</p>
                    </div>

                </div>


    ))}




        </>
    )};
