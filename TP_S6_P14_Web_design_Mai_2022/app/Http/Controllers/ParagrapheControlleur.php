<?php

namespace App\Http\Controllers;
use App\Models\Paragraphe;

use App\Models\Contenue;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ParagrapheControlleur extends Controller
{
    public function add()
    {
        //initialisation des donnees
        $contenues = Contenue::all();


        return Inertia::render('BO/InsertionParagraphe',
            [
                'contenues' => $contenues
            ]
        );
    }

    public function insert(Request $request)
    {
        $idcontenue = $request->get('idcontenue');
        $titrepara = $request->input('titrepara');
        $imagepara = $request->input('imagepara');
        $descriptione = $request->input('descriptione');

        $paragraphe = Paragraphe::create([
            'idcontenue' => $idcontenue,
            'titrepara' => $titrepara,
            'imagepara' => $imagepara,
            'descriptione' => $descriptione
        ]);

        return $request->all();
    }


}
