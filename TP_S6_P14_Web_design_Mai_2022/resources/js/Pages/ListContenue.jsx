export default function getContenueByCategory({categorie}){
    return(
        <>

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
