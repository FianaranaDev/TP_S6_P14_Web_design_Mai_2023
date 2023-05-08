<?php

namespace App\Http\Controllers;
use App\Models\Contenue;
use App\Models\Categorie;
use App\Models\Paragraphe;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContenueController extends Controller
{
    function getAcceuil(){
        //initialisation donnee
            $contenue=Contenue::paginate(1);
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

    function getContenue(Request $request){
        //initialisation donnee
            $detail=Contenue::find($request->get("id"));
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
        public function delete(Request $request){

            Paragraphe::where('idcontenue',$request->get("id"))->delete();
            Contenue::find($request->get("id"))->delete();

            //initialisation des donnees
                $contenue=Contenue::paginate(3);
            //disp
            return Inertia::render('BO/ListContenue',
                [
                    'contenue'=>$contenue
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


            $contenu = [
                'keywords' => $request->input('keywords'),
                'titre' => $request->input('titre'),
                'idcategorie' => $request->input('idcategorie'),
                'resume' => $request->input('resume'),
                'image' => $request->input('image'),
                'snippet' => $request->input('snippet'),
                'descriimage' => $request->input('descriimage'),
                'datepublication' => $request->input('datepublication')
            ];


            $idcontenue = $request->get('idcontenue');
            $titrepara = $request->get('titrepara');
            $imagepara = $request->get('imagepara');
            $descriptione = $request->get('descriptione');

            $paragraphe = [
                'idcontenue' => $idcontenue,
                'titrepara' => $titrepara,
                'imagepara' => $imagepara,
                'descriptione' => $descriptione
            ];


            return  $request->get('titrepara');
        }










}

