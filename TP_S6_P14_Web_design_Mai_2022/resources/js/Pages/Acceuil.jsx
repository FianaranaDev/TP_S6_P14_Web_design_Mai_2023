export default function getContenue({contenue,categorie}){
    return(
        <>

        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="zavatra"/>

            <title></title>
        </head>
        <body>


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
            </body>
        </html>
        </>
    );
}
