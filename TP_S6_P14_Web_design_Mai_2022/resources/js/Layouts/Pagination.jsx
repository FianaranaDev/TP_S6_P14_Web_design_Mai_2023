

import React from 'react';
export default function Pagination({contenue}){
    return(
      <>
                    <div class="text-start py-4">
                                             <div class="custom-pagination">
                                                 <a href={contenue.prev_page_url} class="prev">Prevous</a>

                                                 {contenue.links.map((link, i) => (
                                                     <React.Fragment key={i}>
                                                         <a href={link.url} className="active">{i + 1}</a>
                                                     </React.Fragment>
                                                 ))}



                                             <a href={contenue.next_page_url} class="next">Next</a>
                                               </div>
                                         </div>

      </>
    );

}
