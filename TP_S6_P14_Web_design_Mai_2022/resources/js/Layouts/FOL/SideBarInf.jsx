export default function SideBarInf({recent}){
    return(
        <>
          <div className="aside-block">
               <h2 className="aside-title">Recent</h2>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">
                        {recent.map((c) => (
                            <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date"><strong>{c.snippet}</strong></span>  <span><strong>{c.datepublication}</strong></span></div>
                            <h2 className="mb-2"><a href={"/detail?id="+c.id}>{c.titre}</a></h2>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

}
