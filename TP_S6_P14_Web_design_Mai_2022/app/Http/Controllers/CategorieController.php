<?php

namespace App\Http\Controllers;
use App\Models\Categorie;
use Illuminate\Http\Request;
use Inertia\Inertia;
class CategorieController extends Controller
{

    function getAllCategorie(){
        //initialisation
            $categorie=Categorie::all();
        //redirection
            return Inertia::render('ListCategorie',[
                'categorie'=>$categorie
            ]);
    }
    function getParCategorie(Request $request){
        //initialisation pagination 2
            $categorie=Categorie::where('id','=',$request->get("id"))->first();
            $categorie->contenues=$categorie->contenues()->paginate(2);
            $cat=Categorie::all();
        //redirection

            return Inertia::render('ParCategorie',[
                'categorie'=>$categorie,
                'cat'=>$cat
            ]);
    }


}
