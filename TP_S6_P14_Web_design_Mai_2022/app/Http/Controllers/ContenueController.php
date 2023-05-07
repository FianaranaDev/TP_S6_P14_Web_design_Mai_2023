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
            return Inertia::render('Acceuil',[
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
            return Inertia::render('Detail',[
                'detail'=>$detail,
                'listcategorie'=>$listcategorie
            ]);
    }
}

