import { Head } from "@inertiajs/react";



export default function getAllCategorie({categorie}){
    return(
        <>
                <Head>
            <title>Categorie</title>
            <meta name="description" content="les categorie"/>

        </Head>

           {categorie.map((c) => (
            <>
                    <a href={"/category/"+c.id}>{c.nomcategorie}</a>
            </>


        ))}

        </>
    );
}

