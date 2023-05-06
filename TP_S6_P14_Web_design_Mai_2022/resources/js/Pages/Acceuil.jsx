export default function getContenue({contenue,categorie}){
    return(
        <>



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
