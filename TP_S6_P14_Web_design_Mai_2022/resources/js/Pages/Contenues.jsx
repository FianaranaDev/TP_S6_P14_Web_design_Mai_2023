
export default function Contenues({contenue}){
    return(
        <>
             {contenue.map((c) => (

            <div class="d-md-flex post-entry-2 half">
          <a href="single-post.html" class="me-4 thumbnail">
            <img src="assets/img/post-landscape-3.jpg" alt="" class="img-fluid"></img>
          </a>
          <div>
            <div class="post-meta"><span class="date">{c.snippet}</span> <span class="mx-1">&bullet;</span> <span>{c.datepublication}</span></div>
            <h3><a href={"/detail?id="+c.id} >{c.titre}</a></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
            <div class="d-flex align-items-center author">
              <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid"></img></div>
              <div class="name">
                <h3 class="m-0 p-0">Wade Warren</h3>
              </div>
            </div>
          </div>
        </div>


))}




        </>
    )};
