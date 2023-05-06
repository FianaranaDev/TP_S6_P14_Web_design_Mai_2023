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
    function getCategorie($id){
        //initialisation pagination 2
            $categorie=Categorie::where('id','=',$id)->first();
            $categorie->contenues=$categorie->contenues()->paginate(2);

        //redirection
            return Inertia::render('ListContenue',[
                'categorie'=>$categorie
            ]);
    }


}
