

import React from 'react';
export default function Pagination({contenue}){

    function paginationdecode(html){
        var txt=HTMLTextAreaElement = document.createElement("textarea");
        txt.innerHTML=html;
        if(txt.value=="« Previous")return "«";
        if(txt.value=="Next »")return "»";

        return txt.value;
    }


    return(
      <>
                    <div class="text-start py-4">
                                             <div class="custom-pagination">

                                                 {contenue.links.map((link, i) => (
                                                     <React.Fragment key={i}>
                                                         <a href={link.url} className="active">{paginationdecode(link.label)}</a>
                                                     </React.Fragment>
                                                 ))}



                                               </div>
                                         </div>

      </>
    );

}
