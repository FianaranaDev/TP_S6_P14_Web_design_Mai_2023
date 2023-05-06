<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UtilisateurController extends Controller
{
     function getUtilisateur(){
        //initialisation
            $utilisateur=Utilisateur::all()[0];
        //redirection
            return Inertia::render('Test',[
                'Utilisateur'=>$utilisateur
            ]);
     }
}
