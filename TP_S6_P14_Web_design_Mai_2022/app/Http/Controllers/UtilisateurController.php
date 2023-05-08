<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UtilisateurController extends Controller
{
    public function save(Request $request)
    {
        Utilisateur::create(json_decode($request->getContent(), true));
        return response()->json(['message' => 'Utilisateur créé avec succès']);
    }

    public function create(Request $request)
    {
        // Créer un nouvel objet utilisateur à partir des données validées
        $utilisateur = Utilisateur::create([
            'nameutilisateur' => $request->input('nameutilisateur'),
            'mdputilisateur' => $request->input('mdputilisateur')
        ]);
        return $utilisateur;

        $utilisateur->save();



        // Rediriger l'utilisateur vers la page de confirmation
        return redirect('/confirmation')->with('success', 'Utilisateur créé avec succès!');
    }
    public function deb()
    {
        return Inertia::render('BO/TestInsertion');
    }
}
