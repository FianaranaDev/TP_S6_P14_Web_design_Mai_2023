
export default function FooterContenues({recent}){
    return(
        <>
            <div className="col-lg-4">
                <h3 className="footer-heading">Recent</h3>

                <ul className="footer-links footer-blog-entry list-unstyled">



                    {recent.map((c) => (
                    <li>
                        <a href="#" className="d-flex align-items-center">
                            <img src={"/assets/img/"+c.image} alt="" className="img-fluid me-3"></img>
                            <div>
                                <div className="post-meta d-block"><span className="date">{c.snippet}</span> <span
                                    className="mx-1">;</span> <span>{c.datepublication}</span></div>
                                <span><a href={"/detail/"+c.id+"-"+"contenue"} >{c.titre}</a></span>

                            </div>
                        </a>
                    </li>


                    ))}
                </ul>

            </div>


        </>
    )};
