import { Head } from "@inertiajs/react";


export default function getDetail({detail}){
    return(
        <>
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

        </>
    );
}
