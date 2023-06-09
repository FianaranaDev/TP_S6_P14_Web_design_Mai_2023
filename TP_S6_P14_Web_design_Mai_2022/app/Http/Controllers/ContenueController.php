<?php

namespace App\Http\Controllers;
use App\Models\Contenue;
use App\Models\Categorie;
use App\Models\Paragraphe;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ContenueController extends Controller
{
    function getAcceuil(){
        //initialisation donnee
            $contenue=Contenue::paginate(3);
            $listcategorie=Categorie::all();
            //date recent ordre decroisante en evitant order by
                $recent = Contenue::orderBy('datepublication', 'desc')->get();



        //redirection
            return Inertia::render('FO/Acceuil',[
                'contenue'=>$contenue,
                'listcategorie'=>$listcategorie,
                'recent'=>$recent
            ]);
    }

    function getContenue($id){
        $id=explode('-',$id)[0];


        $detail=Contenue::where('id','=',$id)->first();
        //initialisation donnee
            $detail->paragraphes=$detail->paragraphes()->paginate(3);
            $listcategorie=Categorie::all();



        //redirection
            return Inertia::render('FO/Detail',[
                'detail'=>$detail,
                'listcategorie'=>$listcategorie
            ]);
    }




//BO
        //list
            public function listDU(){
                //initialisation des donnees
                    $contenue=Contenue::paginate(3);


                //disp
                return Inertia::render('BO/ListContenue',
                    [
                        'contenue'=>$contenue
                    ]
                );
            }

          //delete
        public function delete($id){
            $id=explode('-',$id)[0];
            Paragraphe::where('idcontenue',$id)->delete();
            Contenue::find($id)->delete();

            //initialisation des donnees
                $contenue=Contenue::paginate(3);
            //disp
            return Inertia::render('BO/ListContenue',
                [
                    'contenue'=>$contenue
                ]
            );
        }


    public function deletepara($id){
        $id=explode('-',$id)[0];
        Paragraphe::where('id',$id)->delete();




        $contenues=Contenue::find($id);
        $listcategorie=Categorie::all();
        $paragraphes=Paragraphe::where('idcontenue','=',$id)->get();

        return Inertia::render('BO/ContenueUpdate',
            [
                'contenues'=>$contenues,
                'listcategorie'=>$listcategorie,
                'paragraphes'=>$paragraphes
            ]
        );
    }





    public function update($id){
        $id=explode('-',$id)[0];
        $contenues=Contenue::find($id);
        $listcategorie=Categorie::all();
        $paragraphes=Paragraphe::where('idcontenue','=',$id)->get();

        return Inertia::render('BO/ContenueUpdate',
            [
                'contenues'=>$contenues,
                'listcategorie'=>$listcategorie,
                'paragraphes'=>$paragraphes
            ]
        );
    }




    //insertion
        public function add()
        {
                //initialisation des donnees
                    $listcategorie=Categorie::all();

            return Inertia::render('BO/InsertionContenue',
                [
                    'listcategorie'=>$listcategorie
                ]
            );
        }
        public function insert(Request $request)
        {
            //insertion contenue
                $keywords = $request->get('keywords');
                $titre = $request->get('titre');
                $idcategorie= $request->get('idcategorie');
                $resume = $request->get('resume');
                $snippet = $request->get('snippet');
                $datepublication = $request->get('datepublication');

                //traitement image
                    $descriimage =$request->get('descriimage');
                    $nomiamge=Str::slug($descriimage).".".$request->file('image')->extension();
                //upload image
                    $request->file('image')->move(public_path('assets/img'),$nomiamge);


                $data=[
                    'titre'=>$titre,
                    'idcategorie'=>$idcategorie,
                    'resume'=>$resume,
                    'snippet'=>$snippet,
                    'datepublication'=>$datepublication,
                    'keywords'=>$keywords,
                    'image'=>$nomiamge
                    ];

                $contenue=Contenue::create($data);





            //insertion contenue
                    $titrepara = $request->get('titrepara');
                    $descriptione = $request->get('descriptione');

            //traitement image
                    $descritimage = $request->get('descritimage');
                    $ext=$request->files->get('imagepara');
//                    return $ext;



                    for($i=0;$i<count($titrepara);$i++) {
                $nomiamgepara=Str::slug($descritimage[$i]);
                //upload image
                $ext[$i]->move(public_path('assets/img'),$nomiamgepara);

                $paragraphe = [
                    'idcontenue' => $contenue->id,
                    'titrepara' => $titrepara[$i],
                    'imagepara' => $nomiamgepara,
                    'descriptione' => $descriptione[$i]
                ];
                $para = Paragraphe::create($paragraphe);
            }



            //initialisation des donnees
            $contenue=Contenue::paginate(3);


            //disp
            return Inertia::render('BO/ListContenue',
                [
                    'contenue'=>$contenue
                ]
            );
        }

    public function setupdate(Request $request,$id){
        $id=explode('-',$id)[0];


        //insertion contenue
        $keywords = $request->get('keywords');
        $titre = $request->get('titre');
        $idcategorie= $request->get('idcategorie');
        $resume = $request->get('resume');
        $snippet = $request->get('snippet');
        $datepublication = $request->get('datepublication');

        //traitement image
        $descriimage =$request->get('descriimage');
        $nomiamge=Str::slug($descriimage).".".$request->file('image')->extension();
        //upload image
        $request->file('image')->move(public_path('assets/img'),$nomiamge);
        $data=[
            'titre'=>$titre,
            'idcategorie'=>$idcategorie,
            'resume'=>$resume,
            'snippet'=>$snippet,
            'datepublication'=>$datepublication,
            'keywords'=>$keywords,
            'image'=>$nomiamge
        ];
        $contenues=Contenue::find($id)->update($data);
        Paragraphe::where('idcontenue',$id)->delete();


//


        //insertion contenue
        $titrepara = $request->get('titrepara');
        $descriptione = $request->get('descriptione');

        //traitement image
        $descritimage = $request->get('descritimage');
        $ext=$request->files->get('imagepara');
//                    return $ext;



        for($i=0;$i<count($titrepara);$i++) {
            $nomiamgepara=Str::slug($descritimage[$i]);
            //upload image
            $ext[$i]->move(public_path('assets/img'),$nomiamgepara);

            $paragraphe = [
                'idcontenue' => $id,
                'titrepara' => $titrepara[$i],
                'imagepara' => $nomiamgepara,
                'descriptione' => $descriptione[$i]
            ];
            $para = Paragraphe::create($paragraphe);
        }



        //initialisation des donnees
        $contenue=Contenue::paginate(3);

        //disp
        return Inertia::render('BO/ListContenue',
            [
                'contenue'=>$contenue
            ]
        );
    }










}

