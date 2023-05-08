<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{
    use HasFactory;

    protected $table = "utilisateur";
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = [
        'nameutilisateur',
        'mdputilisateur'
    ];

    // Définition des setters
    public function setNameutilisateurAttribute($value)
    {
        $this->attributes['nameutilisateur'] = strtolower($value);
    }

    public function setMdputilisateurAttribute($value)
    {
        $this->attributes['mdputilisateur'] = bcrypt($value);
    }
}

