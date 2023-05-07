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
            //categorie et contnue du premier page
                $categorie=Categorie::where('id','=',$request->get("id"))->first();
                $categorie->contenues=$categorie->contenues()->paginate(2);
                $listcategorie=Categorie::all();
            //page recent

            //tags

        //redirection

            return Inertia::render('ParCategorie',[
                'categorie'=>$categorie,
                'listcategorie'=>$listcategorie
            ]);
    }


}
