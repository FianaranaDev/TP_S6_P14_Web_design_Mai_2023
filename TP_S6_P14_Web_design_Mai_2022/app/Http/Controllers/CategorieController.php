<?php

namespace App\Http\Controllers;
use App\Models\Categorie;
use App\Models\Contenue;

use Illuminate\Http\Request;
use Inertia\Inertia;
class CategorieController extends Controller
{

    function getAllCategorie(){
        //initialisation
            $categorie=Categorie::all();
        //redirection
            return Inertia::render('FO/ListCategorie',[
                'categorie'=>$categorie
            ]);
    }
    function getParCategorie(Request $request){
        //initialisation pagination 2
            //categorie et contnue du premier page
                $categorie=Categorie::where('id','=',$request->get("id"))->first();
                $categorie->contenues=$categorie->contenues()->paginate(2);
                $listcategorie=Categorie::all();
                $recent=Contenue::all();
            //page recent



        //redirection

            return Inertia::render('FO/ParCategorie',[
                'categorie'=>$categorie,
                'listcategorie'=>$listcategorie,
                'recent'=>$recent
            ]);
    }
    function insert(Request $request){

        $categorie = Categorie::create([
            'nomcategorie' => $request->input('nomcategorie')
        ]);

        return $categorie;


    }

    public function add()
    {
        return Inertia::render('BO/InsertionCategory');
    }



}
