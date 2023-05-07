export default function SideBarInf(){
    return(
        <>
            <div className="aside-block">

                <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-popular-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-popular" type="button" role="tab"
                                aria-controls="pills-popular" aria-selected="true">Popular
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-trending-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-trending" type="button" role="tab"
                                aria-controls="pills-trending" aria-selected="false">Trending
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-latest-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-latest" type="button" role="tab"
                                aria-controls="pills-latest" aria-selected="false">Latest
                        </button>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">

                    <div className="tab-pane fade show active" id="pills-popular" role="tabpanel"
                         aria-labelledby="pills-popular-tab">
                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Sport</span> <span
                                className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During
                                Video Calls?</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Lifestyle</span> <span
                                className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That
                                Will Inspire Your New Haircut</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>



                    </div>


                </div>
            </div>







        </>
    );

}
