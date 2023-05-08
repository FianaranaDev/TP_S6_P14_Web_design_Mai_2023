
export default function Contenues({contenue}){
    return(
        <>
                 {contenue.map((c) => (

                    <div class="d-md-flex post-entry-2 half">

                            <img src={"assets/img/"+c.image} alt="" class="img-fluid"></img>

                    <div>


                    <div class="post-meta"><span class="date">{c.snippet}</span> <span >;</span> <span>{c.datepublication}</span></div>
                        <h2><a href={"/detail?id="+c.id} >{c.titre}</a></h2>
                            <p>{c.resume}</p>
                    </div>
            </div>


    ))}




        </>
    )};
