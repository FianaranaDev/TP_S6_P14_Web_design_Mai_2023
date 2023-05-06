export default function getContenueByCategory({categorie}){
    return(
        <>
         <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="zavatra"/>

            <title>{c.titre}</title>
        </head>
        <body>

            {categorie.nomcategorie}
           {categorie.contenues.data.map((c) => (
            <>
                <h1>{c.titre}</h1>
                <strong>{c.snippet}</strong><br/>
                {c.datepublication}<br/>

                <strong><a href={"/detail?id="+c.id}>{c.titre}</a></strong>


            </>

        ))}
            </body>
            </html>
        </>
    );
}
