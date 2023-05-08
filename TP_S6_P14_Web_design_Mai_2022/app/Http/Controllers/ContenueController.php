<?php

namespace App\Http\Controllers;
use App\Models\Contenue;
use App\Models\Categorie;
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
    //upload image
            public function test()
            {
                //initialisation des donnees
                return Inertia::render('BO/TestImage');
            }
            public function upload(Request $request)
            {
                // Vérifier si le fichier a été envoyé
                if ($request->hasFile('image')) {
                    // Obtenir le fichier envoyé
                    $image = $request->file('image');
                    // Générer un nom de fichier unique
                    $filename = uniqid() . '.' . $image->getClientOriginalExtension();
                    // Déplacer le fichier vers le dossier de destination
                    $image->move(public_path('uploads'), $filename);
                    // Sauvegarder le nom de fichier dans la base de données
                    $data = ['filename' => $filename];
                    Image::create($data);
                    // Rediriger l'utilisateur vers la page de succès
                    return redirect('/success');
                } else {
                    // Rediriger l'utilisateur vers la page d'erreur
                    return redirect('/error');
                }
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
            $contenu = Contenue::create([
                'keywords' => $request->input('keywords'),
                'titre' => $request->input('titre'),
                'idcategorie' => $request->input('idcategorie'),
                'resume' => $request->input('resume'),
                'image' => $request->input('image'),
                'snippet' => $request->input('snippet'),
                'descriimage' => $request->input('descriimage'),
                'datepublication' => $request->input('datepublication')
            ]);

            return $contenu;
        }










}

