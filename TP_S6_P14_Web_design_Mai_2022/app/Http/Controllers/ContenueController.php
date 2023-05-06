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
            $contenue=Contenue::all();
            $categorie=Categorie::all();
            $categorie=$categorie->paginate(3);
        //redirection

            return Inertia::render('Acceuil',[
                'contenue'=>$contenue,
                'categorie'=>$categorie
            ]);
    }

    function getContenue(Request $request){
        //initialisation donnee
            $detail=Contenue::find($request->get("id"));
            $detail->paragraphes=$detail->paragraphes()->paginate(3);
            $categorie=Categorie::all();

        //redirection
            return Inertia::render('Detail',[
                'detail'=>$detail,
                'categorie'=>$categorie
            ]);
    }
}

