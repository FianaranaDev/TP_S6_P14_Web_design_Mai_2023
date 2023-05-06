export default function getContenueByCategory({categorie}){
    return(
        <>

                          <Head>
            <title>{c.titre}</title>
            <meta name="description" content={c.snippet}/>

        </Head>



            {categorie.nomcategorie}
           {categorie.contenues.data.map((c) => (
            <>
                <h1>{c.titre}</h1>
                <strong>{c.snippet}</strong><br/>
                {c.datepublication}<br/>

                <strong><a href={"/detail?id="+c.id}>{c.titre}</a></strong>


            </>

        ))}

        </>
    );
}
