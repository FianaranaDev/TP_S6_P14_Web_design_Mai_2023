export default function InsertionC({listcategorie}) {


    return (

        <>

        <div className="card">
            <div className="card-body">
        <h5 className="card-title">Paragraphe</h5>

        <form className="row g-3">
            <div className="col-md-12">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingName"
                           placeholder="Your Name"></input>
                    <label htmlFor="floatingName">titre</label>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-floating">

                    <input type="file" className="form-control" id="floatingEmail"
                           placeholder="Your Email"></input>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-floating">
                    <input type="password" className="form-control"
                           id="floatingPassword" placeholder="Password"></input>
                    <label htmlFor="floatingPassword">descrit image</label>
                </div>
            </div>
            <div className="col-12">
                <div className="form-floating">
                                                    <textarea className="form-control" placeholder="Address"
                                                              id="floatingTextarea" ></textarea>
                    <label htmlFor="floatingTextarea">paragrapne</label>
                </div>
            </div>



        </form>

    </div>
</div>

</>

);
}
