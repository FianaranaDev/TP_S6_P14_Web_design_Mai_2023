export default function getAllCategorie({categorie}){
    return(
        <>
                 <Head title="fds" />

           {categorie.map((c) => (
            <>
                    <a href={"/category/"+c.id}>{c.nomcategorie}</a>
            </>


        ))}
        
        </>
    );
}

