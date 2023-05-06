export default function getAllCategorie({categorie}){
    return(
        <>
           {categorie.map((c) => (
            <>
                    <a href={"/category/"+c.id}>{c.nomcategorie}</a>
            </>
        ))}
        </>
    );
}

