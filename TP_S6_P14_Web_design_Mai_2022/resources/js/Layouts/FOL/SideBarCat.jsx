export default function SideBarCat({categorie}){
    return(
      <>
          <div className="aside-block">
              <h2 className="aside-title">Categories</h2>
                <ul className="aside-links list-unstyled">
                    {categorie.map((z) => (
                        <>
                  <li><a href={"/detail/"+z.id+"-"+"categorie"} ><i className="bi bi-chevron-right"></i>{z.nomcategorie}</a></li>
                        </>
                    ))}
              </ul>
          </div>
      </>
    );

}
