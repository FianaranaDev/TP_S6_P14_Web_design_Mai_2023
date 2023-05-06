export default function getDetail({detail}){
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

            <h1>{detail.titre}</h1>
            <strong>{detail.snippet}</strong><br/>
            {detail.datepublication}<br/>


            {detail.paragraphes.data.map((p) => (
                <>

          <h1>{p.titrepara}</h1>
              {p.descriptione}<br/>
              <br/><br/><br/>


        </>
        ))}



            <br/><br/><br/>

                </body></html>

        </>
    );
}
